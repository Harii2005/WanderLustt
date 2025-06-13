const User = require("../Models/user");

module.exports.renderSignupForm = (req , res) =>{
    res.render('./users/signup.ejs');
}

module.exports.signup = async(req , res) =>{
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

}

module.exports.renderLoginForm = (req , res) =>{
    res.render('./users/login.ejs');
}


module.exports.login = (req , res) =>{
    req.flash("success" , "Welcome to Wanderlust! You are logged in!");
    const redirectUrl = res.locals.originalUrl || '/listings'; //this line means that is res.locals.originalUrl exsists it will redirect to that otherwise it will be redirected to "/listings"
    res.redirect(redirectUrl);
}

module.exports.logout = (req , res) =>{
    req.logOut((err) =>{//req.logOut clears the passport session so logs out 
        if(err){
            return next(err);
        }
        req.flash("success" , "loggedOut successfully!");
        res.redirect("/listings");
    });

}