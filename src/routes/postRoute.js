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
} from "../controller/postController";
const postRoute = express.Router();
postRoute.post("/posts/add", adminAuthorization,fileUpload.single("postImage"), addPost);
postRoute.get("/posts/get/all",getAllPosts);
postRoute.get("/posts/single/post/:id",getSinglePost);
postRoute.put("/posts/update/:id",adminAuthorization, fileUpload.single("postImage"),updatePost);
postRoute.delete("/posts/delete/:id",adminAuthorization,deletePost);

export default postRoute;