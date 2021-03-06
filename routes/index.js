const express = require('express');
const router = express.Router();

const users = require('./users.js'); //methods from users.js
const posts = require('./posts.js');
const bodyData = require('./middleware.js');
const userHandler = require('./userHandler.js');
const postHandler = require('./postHandler.js');

//router.use(bodyData.bodyData)

//router.get("/users", users.getUsers);
//router.post("/users", users.postUsers);
//router.get("/users/:id", users.getUserId);
//router.put("/users/:id",users.putUser);

//router.get("/params", users.params);

//router.get("/posts", posts.paramsPost);
//router.get("/posts", posts.getPosts);
router.get("/posts", posts.getPostByConditionalId);
//router.post("/posts", posts.addPost);
//router.get("/posts/:id",posts.postById);
//router.put("/posts/:id", posts.putPostByID);
//router.patch("/posts/:id", posts.patchPostByID);
//router.delete("/posts/:id", posts.deletePostByID);

//router.get("/users", userHandler.getUsers);
//router.post("/users", userHandler.postUser);
//router.get("/users", userHandler.getUserByConditionalId);

//router.get("/posts", postHandler.getPosts);
//router.get("/posts/:id", postHandler.getPostsById);
//router.post("/posts", postHandler.addPost);
//router.put("/posts/:id", postHandler.editFullPost);
//router.patch("/posts/:id", postHandler.editPartialPost);

module.exports = router;
