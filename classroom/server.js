const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");

app.use('/users' , users);
app.use('/posts' , posts);

// Root
app.get("/", (req, res) => {
  res.send("Hi, I am root!");
});



//users
// Index – users
// app.get("/users", (req, res) => {
//   res.send("GET for users");
// });

// // Show – users
// app.get("/users/:id", (req, res) => {
//   res.send("GET for user id");
// });

// // POST – users
// app.post("/users", (req, res) => {
//   res.send("POST for users");
// });

// // DELETE – users
// app.delete("/users/:id", (req, res) => {
//   res.send("DELETE for user id");
// });

// // Posts
// // Index
// app.get("/posts", (req, res) => {
//   res.send("GET for posts");
// });

// // Show – posts
// app.get("/posts/:id", (req, res) => {
//   res.send("GET for post id");
// });

// // POST – posts
// app.post("/posts", (req, res) => {
//   res.send("POST for posts");
// });

// // DELETE – posts
// app.delete("/posts/:id", (req, res) => {
//     res.send("DELETE for post id");
// });

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});