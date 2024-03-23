import express from "express";
import { 
    createUser,
    userLogin,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    deleteAllUsers,
 } from "../controller/userController";
 import fileUpload from "../helper/multer";

 const userRoute = express.Router();
 userRoute.post("/users/signUp",fileUpload.single("profile"),createUser);
 userRoute.post("/users/login",fileUpload.single("profile"),userLogin);
 userRoute.get("/users/get/users",getUsers);
 userRoute.get("/users/get/single/:id",getSingleUser);
 userRoute.put("/users/update/:id",fileUpload.single("profile"),updateUser);
 userRoute.delete("/users/delete/:id",deleteUser );
 userRoute.delete("/users/delete/",deleteAllUsers );
 export default userRoute;
