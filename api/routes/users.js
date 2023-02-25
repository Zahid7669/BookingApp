import express from "express";
import { deleteUser, getUserById, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// // AUTHENTICATION
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("You are successfully logged in! ")
// })

// // VERIFYUSER
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("Hello User! You are successfully logged in and You have permission to delete your account! ")
// })

// // VERIFYUSER
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("Hello Admin! You are successfully logged in and You have permission to delete all accounts! ")
// })


//UPDATE
router.put("/:id", verifyUser, updateUser )

//DELETE
router.delete("/:id", verifyUser, deleteUser)
//GET
router.get("/:id", verifyUser, getUserById)
//GETALL
router.get("/", verifyAdmin, getUsers)

export default router
