import express from "express";
import fileUpload from "../helper/multer";
import { normalUserAuthentication,adminAuthorization } from "../middleware/Authentication";

import { 
    addComment,
    getAllComments,
    getSingleComment,
    deleteComment,
} from "../controller/commentController";

const commentRoute = express.Router();
commentRoute.post("/comments/add/:id",normalUserAuthentication,fileUpload.single("postImage"), addComment);
commentRoute.get("/comments/all",getAllComments);
commentRoute.get("/comments/single/:id",getSingleComment);
commentRoute.delete("/comments/delete/:id",adminAuthorization,deleteComment);

export default commentRoute;