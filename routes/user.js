const express = require('express');
const router  = express.Router({});
const User    = require("../Models/user.js");
const WrapAsync = require("../utils/WrapAsync.js")
const passport = require('passport');
const {saveRedirectUrl} = require("../middleware.js");

router.get('/signup' , (req , res) =>{
    res.render('./users/signup.ejs');
});

router.post('/signup' ,WrapAsync( async(req , res) =>{
    try{
        let {username , email , password} = req.body;
        const newuser = new User({username : username , email : email});
        const regesteredUser = await User.register(newuser , password);//in this way the password will be stored in hashed form 
        //also this will save the file so no need to use newuser.save()
        console.log(regesteredUser);
        req.login(regesteredUser , (err)=>{//req.login will help us to automactically login after signup
            if(err){
                next(err);
            }
            req.flash("success" , "Welcome to Wanderlust");
            res.redirect("/listings");
        });

    }catch(err){
        req.flash("error" , err.message);
        res.redirect("/signup");
    }

}));


router.get('/login' , (req , res) =>{
    res.render('./users/login.ejs');
});

router.post('/login',
    saveRedirectUrl, 
    passport.authenticate('local',{ //middleware used for authentification ie it will check wheather the given username and password in
        
        failureRedirect: '/login',//this ,means passport package will cheeck wheather the given username and pass exists in the UserSchema or NOT

        failureFlash : true//this will flash a msg if somthing goes wrong
    }),
    (req , res) =>{
        req.flash("success" , "Welcome to Wanderlust! You are logged in!");
        console.log(res.locals.originalUrl);
        res.redirect(res.locals.originalUrl);
    }
);


router.get('/logout' , (req , res) =>{
    req.logOut((err) =>{//req.logOut clears the passport session so logs out 
        if(err){
            return next(err);
        }
        req.flash("success" , "loggedOut successfully!");
        res.redirect("/listings");
    });

});


module.exports = router;