import express from "express";
import fileUpload from "../helper/multer";
import { normalUserAuthentication,adminAuthorization } from "../middleware/Authentication";

import { 
    addReply,
    getAll,
    getReply,
    deleteReply,
 } from "../controller/replyController";

const replyRoute = express.Router();
replyRoute.post("/replies/add/:id",normalUserAuthentication,fileUpload.single("postImage"),addReply);
replyRoute.get("/replies/all", getAll);
replyRoute.get("/replies/single/:id", getReply);
replyRoute.delete("/replies/delete/:id",adminAuthorization,deleteReply);

export default replyRoute;