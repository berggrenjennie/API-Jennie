const express = require("express");
const app = express();

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

app.use(express.json());

//USERS
app.get("/users", (req, res) => {
  res.send([
    {"name": "Jennie"},
    {"name": "Eva"},
    {"name": "Simon"},
    {"name": "Rebecka"}
  ]);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send(req.body.name);
});

//POSTS

app.get("/posts", (req, res) => {
  res.send([
    {"title": "exempel1","body":"test1"},
    {"title": "exempel2","body":"test2"},
    {"title": "exempel3","body":"test3"}
  ]);
});

app.post("/posts", (req, res) => {

});






// Start up server and begin listen to requests
app.listen(port, () => {
  console.info(`Server is listening on port ${port}.`);
});
