const express = require('express');
const router  = express.Router({});
const User    = require("../Models/user.js");
const WrapAsync = require("../utils/WrapAsync.js")
const passport = require('passport');
const {saveRedirectUrl} = require("../middleware.js");
const UserController = require('../Controller/user.js');

router.get('/signup' , UserController.renderSignupForm); 

router.post('/signup' ,WrapAsync(UserController.signup));


router.get('/login' , UserController.renderLoginForm);

router.post('/login',
    saveRedirectUrl, 
    passport.authenticate('local',{ //middleware used for authentification ie it will check wheather the given username and password in
        
        failureRedirect: '/login',//this ,means passport package will cheeck wheather the given username and pass exists in the UserSchema or NOT

        failureFlash : true//this will flash a msg if somthing goes wrong
    }),
    UserController.login
);


router.get('/logout' , UserController.logout);


module.exports = router;