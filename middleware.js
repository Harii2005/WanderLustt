module.exports.isLoggedIn = (req , res , next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl
        req.flash("error" , "you must be logged In");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req , res , next) =>{
    if(req.session.redirectUrl){
        res.locals.originalUrl = req.session.redirectUrl;//originUrl will be having the next end point ie in add newisting after login its "/listings/new"
        //it cannot be saved in session as after passport.authticate() it will delete all the sessions ,  so here we have to save it in locals
    }
    next();
}