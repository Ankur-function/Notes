 // * 3. Access Token + Refresh Token System
 /**
Implement short-lived access tokens and refresh tokens, including token rotation/revocation concepts.
 */

/**
 * Note :-
 * An access token is a short-lived credential used directly to authenticate API requests and access protected resources,
 * while a refresh token is a long-lived credential used exclusively to request a new access token once the current one expires
 * without forcing the user to log in again.
 * 
    Revocation = cancel a token
    Rotation = replace an old token with a new token
    Expiration = token naturally becomes invalid after some time

 expiration ka matlab to ho gya ki jo naturally token expire hota hai like we normally do something like this :-
 jwt.sign({userId:userExists._id},'JWT_SECRET_KEY',{expiresIn:'1h'});
 
 so refresh token ko bhi aise kar sakte hai. but in real world app me aise nhi hota sirf access token se. in real world app when a person 
 logged In there are two tokens get generated i.e. 1) access token , short lived token . app me idhar udhar jaane ke liye.
 2) refresh token , long lived token generally for 7 days. 

 so in refresh token what happens here is whenever access token expires suppose in 15 mins. then this refresh token api will be hit
 and this refresh token will create new access token internally so that user can continue keep using the app without interruption.
 and 7 days is the longest period a person can use the app contniuosly with just 1 login. if user keep using the app for 7 days straight 
 so after 7 days it will ask for login again.
 
 suppose user gets inactive for few hours then it will not wait for 7 days. refresh token will also expire. and it will ask to login again.
 
 so,
 Problem 2 taught you:

"How do I create and verify a JWT?"

Problem 3 is teaching you:

"How do I keep a user logged in for a long time
while still being able to control, replace, and
cancel their long-lived authentication credential?"
 */

// 1) we need schema for refresh token because revoke and rotate kaise karoge fir token ko. kaise pta chalega ki token manually revoke
// 1) hua hai , kis time pe hua hai and ab nya token lena hoga etc.

import mongoose from "mongoose";

const refreshToken = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    token:{
        type:String,
        required: true
    },
    expiresAt:{
        type: Date
    },
    revoked : {
        type: Boolean,
        required : true,
        default: false
    }   
})

const RefreshToken = mongoose.model('refreshToken',refreshToken);

const signIn = async(req,res) => {
    try {
        const {email,password} = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validEmail = emailRegex.test(email);
        const validPassword = passwordRegex.test(password);

        if(!email || !password || !validEmail || !validPassword){
            return res.status(400).json({message:'valid email and valid password are required'});
        }

        const userExists = await User.findOne({email});
        if(!userExists) return res.status(400).json({message:'Invalid Credentials'});

        const isValidPassword = await bcrypt.compare(password,userExists.password);
        if(!isValidPassword) return res.status(400).json({message:'Invalid Credentials'});

        const accessToken = jwt.sign({userId:userExists._id,type:'access'},process.env.JWT_SECRET_KEY,{expiresIn:'15m'});
        const refreshToken = jwt.sign({userId:userExists._id,type:'refresh'},process.env.JWT_SECRET_KEY,{expiresIn:'7d'});

        const date = new Date();
        const newDate = date.setDate(date.getDate() + 7);
        const refreshTokenObject = {};
            refreshTokenObject.userId = userExists._id;
            refreshTokenObject.token = refreshToken;
            refreshTokenObject.expiresAt = newDate;
            refreshTokenObject.revoked = false;

        await RefreshToken.create(refreshTokenObject);

        res.cookie('token',accessToken);
        res.cookie('refreshToken',refreshToken);
        const {password,...userData} = userExists;
        return res.status(200).json({message:'User logged in successfully',data:userData})

    } catch (error) {
        return res.status(500).json({message:'Internal Error Occurred',error:error.message});
    }
}

/**
Just think about this question:

When /api/auth/refresh receives a refresh token, what are ALL the things the server needs to verify before trusting it?

There are multiple checks here, and I want you to identify them yourself first.

Write down your checks in plain English — no code needed yet.
 */

/**
 we must check user is valid . and we can do this via old refresh token. old refresh token contains user details.
 so i will check that user still exists in the database or not. and based on these two i will create a new access,refresh token
 and new refresh token and mark revoked field as true in database.
 */

 const getRefreshToken = async(req,res) => {

    try {
        const {refreshToken} = req.cookies;
        if(!refreshToken) return res.status(400).json({message:'User is logged out please login again'});

        const decodedObj = jwt.verify(refreshToken,process.env.JWT_SECRET_KEY);
        if(decodedObj.type !== 'refresh'){
            return res.status(400).json({message:'Invalid Token'});
        }
        const isTokenExists = await RefreshToken.findOne({token:refreshToken});
        if(!isTokenExists) return res.status(400).json({message:'Token does not exists'});

        if(isTokenExists.expiresAt < new Date()) return res.status(400).json({message:'Token has expired'});
        if(isTokenExists.revoked === true) return res.status(400).json({message:'token already used'});



        const isUserExists = await User.findById({_id:decodedObj.userId});
        if(!isUserExists) return res.status(400).json({message:'User does not exists'});

        const accessToken = jwt.sign({userId:isUserExists._id,type:'access'},process.env.JWT_SECRET_KEY,{expiresIn:'15m'});
        const newRefreshToken = jwt.sign({userId:isUserExists._id,type:'refresh'},process.env.JWT_SECRET_KEY,{expiresIn:'7d'});

        const date = new Date();
        const newDate = date.setDate(date.getDate()+7);

        isTokenExists.revoked = true;
        await isTokenExists.save();

        /**
         * but above pehle ye check kar rhe hai ki token exists karta hai ke nhi and fir upate kar rhe hai. but it can create a 
         * race condition when two users tries to hit this api exactly at the same time. so better option to go with atomic update.
         * so condition checking + update ek bar me hi kar do like below :-
         * 
         * const isTokenExists = await RefreshToken.findOneAndUpdate({token:refreshToken,revoked:false},{$set:{revoked:true},{new:true}})
         * if(!isTokenExists) return res.status(400).json({message:'Invalid or already used refresh tokens'});
         */

        const refreshTokenObject = {};
        refreshTokenObject.userId = isUserExists._id;
        refreshTokenObject.token = newRefreshToken;
        refreshTokenObject.expiresAt = newDate;
        refreshTokenObject.revoked = false;

        await RefreshToken.create(refreshTokenObject);

        res.cookie('token',accessToken);
        res.cookie('refreshToken',refreshToken);

        return res.status(200).json({message:'refresh token generated succeessfully',data:newRefreshToken});
    } catch (error) {
        return res.status(500).json({message:'Internal Error Occurred',error:error.message});
    }
 }

 // ! Question) what if two requests arrive at almost exactly the same time. (VVI) 
 /**
  * Solution :- 
  * if multiple requests comes simultaneously then that could create a race condition problem. so to prevent this we must perform
  * atomic operation
  * 
    Solution: Atomic Update

    The key idea is:

    Don't separate "check whether token is active" and "revoke token" into two independent operations.

    Instead, make MongoDB perform the condition and update atomically.

    Conceptually:

    Find token WHERE:

    token = RT1
    AND
    revoked = false
            ↓
    If found:
        mark revoked = true

    The important property is:- 

    "Find active RT1 + revoke it"

    happens as one atomic database operation.
  */
