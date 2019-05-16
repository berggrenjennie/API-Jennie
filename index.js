const express = require("express");
const app = express();

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

app.use(express.json());

users = [
  {"name": "Jennie"},
  {"name": "Eva"},
  {"name": "Simon"},
  {"name": "Rebecka"}
]

//USERS
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body); //Det användaren skickar in
  users.push(req.body)
  res.status(201);
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id) // Det användaren skickar med
  res.send(users[req.params.id-1]); // Det vi skickar till användaren
});

//ersätter med nya uppgifter från användaren
app.put("/users/:id", (req, res) => {
  users[req.params.id-1] = req.body;
  res.send(users[req.params.id-1]);
})



//POSTS
posts = [
  {"title": "exempel1","body":"test1"},
  {"title": "exempel2","body":"test2"},
  {"title": "exempel3","body":"test3"}
]

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
 posts.push(req.body);
 res.status(201);
 res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  console.log(req.params.id) // Det användaren skickar med
  res.send(users[req.params.id-1]); // Det vi skickar till användaren
});

app.put("/posts/:id", (req, res) => {
  posts[req.params.id-1] = req.body;
  res.send(posts[req.params.id-1]);
});

app.patch("/posts/:id", (req, res) => {

  //Ej klart!!
  posts[req.params.id] = res.body;
  res.send(posts[req.params.id]);
});

//Ej klart!!
app.delete("/posts/:id", (req, res) => {
  posts.splice(req.params.id - 1, 1);
  // posts[req.params.id-1] = req.body;
  // res.send(posts[req.params.id-1]);
});


// Start up server and begin listen to requests
app.listen(port, () => {
  console.info(`Server is listening on port ${port}.`);
});
