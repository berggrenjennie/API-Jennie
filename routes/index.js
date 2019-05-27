const express = require('express');
const router = express.Router();

const users = require('./users.js'); //methods from users.js
const posts = require('./posts.js');
const bodyData = require('./middleware.js');
const userHandler = require('./userHandler.js');
const postHandler = require('./postHandler.js');
/**
router.use(bodyData.bodyData)

router.get("/users", users.getUsers);
router.post("/users", users.postUsers);
router.get("/users/:id", users.getUserId);
router.put("/users/:id",users.putUser);

router.get("/params", users.params);

router.get("/posts", posts.paramsPost);
router.get("/posts", posts.getPosts);
router.post("/posts", posts.addPost);
router.get("/posts/:id",posts.postById);
router.put("/posts/:id", posts.putPostByID);
router.patch("/posts/:id", posts.patchPostByID);
router.delete("/posts/:id", posts.deletePostByID);
**/
router.get("/users", userHandler.getUsers);
router.post("/users", userHandler.postUser);

//router.get("/posts", postHandler.getPosts);
//router.post("/posts", postHandler.addPost);

module.exports = router;
