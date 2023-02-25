import express from "express";
import { createHotel, deleteHotel, getHotelById, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/", (req,res)=>{
//     res.send("Hello auth req")
// })

//CREATE
router.post("/",verifyAdmin, createHotel)

//UPDATE
router.put("/:id",verifyAdmin, updateHotel )

//DELETE
router.delete("/:id",verifyAdmin, deleteHotel)

//GET
router.get("/:id",getHotelById)

//GETALL
router.get("/",getHotels)

export default router