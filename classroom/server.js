const express = require("express");
const app = express();
const session = require('express-session');
// const cookieParser = require('cookie-parser');
const flash  = require('connect-flash');

const path = require('path')
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate');

const users = require("./routes/users.js");
const posts = require("./routes/posts.js");

const sessionOptions = {
    secret : "mysupersecretstring",
    resave : false , 
    saveUninitialized : true,  
};

app.use(session(sessionOptions));//enabling sessions in your Express.js app — like giving each visitor a private box to store their own data (e.g. login info, flash messages, cart).

app.use(flash());
// app.use(cookieParser("secretcode"));//this is for cookies and "secretcode" is for signed cookies verifiaction
// app.use('/users' , users);
// app.use('/posts' , posts);

// Root
app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Hi, I am root!");
});


// app.get('/getcookies' , (req , res)=>{
//     res.cookie("greet" , "namaste");
//     res.cookie("origin" , "India");
//     res.send("i have send u some cookies");
// });

// app.get('/greet' , (req , res) => {
//     let {name = "anonymous"} = req.cookies;
//     res.send(`hi ${name} !!`);
// });

// app.get('/getsignedcookie' , (req , res) =>{
//     res.cookie("made-in" , "India" ,  {signed: true});//this means cookie will be verified
//     res.send("cookie is send");
// });
// app.get('/verify' , (req , res) =>{
//     console.log(req.cookies) // this will only print UNSIGNED cookies
//     console.log(req.signedCookies) //this will print only SIGNED cookies
//     res.send('verified');
// });



// app.get('/test' , (req , res) =>{
//     res.send('successful!');
// });

// app.get('/reqcount' , (req , res) =>{
//     if(req.session.count){
//         req.session.count++
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`u have snd a req ${req.session.count} times`);
// });

app.get('/register', (req, res) => {
    let { name = 'anonymous' } = req.query;
    req.session.name = name;
    console.log(req.session.name);
    req.flash('success' , 'user registored successfully!');
    res.redirect("/hello");
});

app.get('/hello', (req, res) => {
    res.render('page.ejs' , {name : req.session.name , msg : req.flash("success")});
});


app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});