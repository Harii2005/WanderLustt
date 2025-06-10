const express = require('express');
const router  = express.Router({});
const User    = require("../Models/user.js");
const WrapAsync = require("../utils/WrapAsync.js")
const passport = require('passport');

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
        req.flash("success" , "Welcome to Wanderlust");
        res.redirect("/listings");
    }catch(err){
        req.flash("error" , err.message);
        res.redirect("/signup");
    }

}));


router.get('/login' , (req , res) =>{
    res.render('./users/login.ejs');
});

router.post('/login' ,
    passport.authenticate('local',{ //middleware used for authentification
        
        failureRedirect: '/login',//this ,means passport package will cheeck wheather the given username and pass exists in the UserSchema or NOT

        failureFlash : true//this will flash a msg if somthing goes wrong
    }),
    (req , res) =>{
        req.flash("success" , "Welcome to Wanderlust! You are logged in!");
        res.redirect("/listings");
    }
);

// router.get("/login", (req, res) => {
//     res.render("users/login.ejs");
// });

// router.post(
//     "/login",
//     passport.authenticate("local", {
//         failureRedirect: "/login",
//         failureFlash: true,
//     }),
//     (req, res) => {
//         res.send("Welcome to Wanderlust! You are logged in!");
//     }
// );


module.exports = router;