const express = require("express")
const Hotel = require("../Models/hotel")
const { GetHotels, GetHotelById, UpdateHotelById, DeleteHotelById, CreateHotel } = require("../Controllers/hotel")
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken")
const router = express.Router()


//FIND BY ID
router.get("/:id", GetHotelById)

//FIND ALL HOTELS
router.get("/", GetHotels)

//UPDATE HOTEL
router.put("/:id", verifyAdmin, UpdateHotelById)  //ADMIN CAN UPDATE ROOM DETAILS

//POST ROOM TO API
router.post("/", verifyAdmin, CreateHotel) //ADMIN CAN CREATE ROOM 

//DELETE ROOM FROM API
router.delete("/:id", verifyAdmin, DeleteHotelById) //ADMIN CAN DELETE ROOM


module.exports = router