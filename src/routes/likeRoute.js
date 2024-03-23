import express from "express";
import fileUpload from "../helper/multer";
import { normalUserAuthentication } from "../middleware/Authentication";

import { 
    likePost,
 } from "../controller/likesController";
 

 const likeRoute = express.Router();
 likeRoute.post("/posts/like/:postId",normalUserAuthentication,fileUpload.single("postImage"), likePost);


 export default likeRoute;