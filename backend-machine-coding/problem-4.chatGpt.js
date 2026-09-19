export const authorizeRoles = (...allowedRoles) => {
    return (req,res,next) => {
        try {
            if(!req.user) return res.status(500).json({message:'Internal Configuration Error'});

            if(!allowedRoles.includes(req.user.role)) return res.status(403).json({message:'You do not have necessary permission to access this'});

            next()
        } catch (error) {
            res.status(500).json({message:'Internal Server Error',error:error.message})
        }

    }
}

// * I will call like this from router :-

userRouter.post('/user/create',userAuth,authorizeRoles('admin'),userController);

userRouter.get('/user/get',userAuth,authorizeRoles('admin','manager'),userController);