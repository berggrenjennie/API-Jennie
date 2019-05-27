posts = [
  {"title": "exempel1","body":"test1"},
  {"title": "exempel2","body":"test2"},
  {"title": "exempel3","body":"test3"}
]

paramsPost = (req, res) => {
  response = {
    "posts": posts,
    "query":req.query,
    "params":req.query,
    "headers":req.headers
  }
  res.send(response);
}

const getPosts = (req, res) => {
  res.send(posts);
}

const addPost = (req, res) => {
 res.sendStatus(201);
 res.send(posts.push(req.body));
}

const postById = (req, res) => {
  console.log(req.params.id) // Det användaren skickar med
  res.send(users[req.params.id-1]); // Det vi skickar till användaren
}

const putPostByID = (req, res) => {
  posts[req.params.id-1] = req.body;
  res.send(posts[req.params.id-1]);
}

 const patchPostByID = (req, res) => {
   res.sendStatus(204);
   posts[req.params.id] = req.body;
   res.send(posts[req.params.id]);
 }

 const deletePostByID = (req, res) => {
   res.send(posts.splice(req.params.id -1, 1));
 }

module.exports = {
  paramsPost: paramsPost,
  getPosts,
  addPost,
  postById,
  putPostByID,
  patchPostByID,
  deletePostByID
}
