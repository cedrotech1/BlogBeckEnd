import express from "express";
import fileUpload from "../helper/multer";
import {adminAuthorization} from "../middleware/Authentication";
import {
     addPost,
     getAllPosts,
     getSinglePost,
     updatePost,
     deletePost,
     likePost,
     unLikePost,
     // videoController
} from "../controller/postController";
const multer = require('multer');
const videoController = require('../controller/videoController');
const storage = multer.diskStorage({});

const upload = multer({ storage });

const postRoute = express.Router();
postRoute.post("/posts/add", adminAuthorization,fileUpload.single("postImage"), addPost);
postRoute.get("/posts/get/all",getAllPosts);
postRoute.get("/posts/single/post/:id",getSinglePost);
postRoute.put("/posts/update/:id",adminAuthorization, fileUpload.single("postImage"),updatePost);
postRoute.delete("/posts/delete/:id",adminAuthorization,deletePost);
postRoute.post('/posts/upload',adminAuthorization, upload.single('video'), videoController.uploadVideo);

export default postRoute;


// routes/videoRoutes.js
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const videoController = require('../controllers/videoController');

// const storage = multer.diskStorage({});

// const upload = multer({ storage });

// router.post('/upload', upload.single('video'), videoController.uploadVideo);

// module.exports = router;
