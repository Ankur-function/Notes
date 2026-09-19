/**
2. Authentication System
Build signup/login with password hashing, JWT access tokens, authentication middleware, and protected routes.
 */

import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const User = mongoose.model('user',userSchema);

const signUp = async(req,res) => {
    try {
        const {name,email,password} = req.body;

        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validName = nameRegex.test(name);
        const validEmail = emailRegex.test(email);
        const validPassword = passwordRegex.test(password);

        if(!name || !email || !password || !validEmail || !validName || !validPassword){
            return res.status(400).json({message:'valid name, valid email and valid password are required'});
        }

        const hashPassword = await bcrypt.hash(password);

        const userObject = {};
            userObject.name = name;
            userObject.email = email;
            userObject.password = hashPassword;

        const user = await User.findOne({email:email});
        if(user) return res.status(400).json({message:'user already exists'});

        const createdUser = await User.create(userObject);
        const token = jwt.sign({userId:createdUser._id},'JWT_SECRET_KEY',{expiresIn:'1h'});
        res.cookie("token",token);
        const {password,...userData} = createdUser;
        return res.status(201).json({message:'User created successfully',data:userData})
    } catch (error) {
        return res.status(500).json({message:'Internal Error Occurred',error:error.message});
    }
}

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

        const userExists = await User.findOne({email:email});
        if(!userExists) return res.status(400).json({message:'Invalid Credentials'});

        const isValidPassword = await bcrypt.compare(password,userExists.password);
        if(!isValidPassword) return res.status(400).json({message:'Invalid Credentials'});

        const token = jwt.sign({userId:userExists._id},'JWT_SECRET_KEY',{expiresIn:'1h'});
        res.cookie('token',token);
        const {password,...userData} = userExists;
        return res.status(200).json({message:'user logged in successfully',data:userData})
    } catch (error) {
        return res.status(500).json({message:'Internal Error Occurred',error:error.message});
    }
}

// Middlware :-
const userAuth = async(req,res) =>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(400).json({message:'You are logged out please login again'});
        }
        const decodedObj = jwt.verify(token,'JWT_SECRET_KEY');
        if(!decodedObj) return res.status(400).json({message:'You are logged out please login again'});
d
        const user =  await User.findById({_id:decodedObj.userId});
        if(!user) return res.status(400).json({message:'user does not exist'})
        req.user = user;
        next()
    } catch (error) {
        return res.status(500).json({message:'Internal Error Occurred',error:error.message});
    }
}

const getProfile = async(req,res) => {
    const {userId} = req.user;

    const user = await User.findById({_id:userId});
    return res.status(200).json({message:'user found successfully',data:user})
}

// profile router :-
import express from 'express';

const profileRouter = express.Router();

profileRouter.get('/view',userAuth,getProfile);

/**
Follow-up 1 — JWT: What exactly is inside a JWT and how does verification work?

Follow-up 2 — Access token vs Refresh token

Follow-up 3 — Cookie vs Authorization header

Follow-up 4 — Authentication vs Authorization

Follow-up 5 — Token theft / XSS / CSRF

Follow-up 6 — Logout with JWT

Follow-up 7 — Password security & brute-force attacks

Follow-up 8 — Concurrent signup / unique email / DB constraints

Follow-up 9 — Production architecture and token invalidation
 */