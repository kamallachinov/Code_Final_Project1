const express = require('express')
const { GetRooms, GetRoomById, UpdateRoomById, DeleteRoomById, CreateRoom, countByRoomType } = require("../Controllers/room")
const { verifyAdmin } = require("../utils/verifyToken")
const router = express.Router()

// app.get("/", (req, res) => {
//     res.send("<h1>Admin Panel</h1>")
// })

//GET ALL ROOMS
router.get("/", GetRooms)

//FIND ROOM by TYPES
router.get("/countByRoomType", countByRoomType)

//GET ROOM BY ID
router.get("/:id", GetRoomById)

//UPDATE ROOM
router.put("/:id", verifyAdmin, UpdateRoomById)  //ADMIN CAN UPDATE ROOM DETAILS

//POST ROOM TO API
router.post("/:hotelId", verifyAdmin, CreateRoom) //ADMIN CAN CREATE ROOM 


//DELETE ROOM FROM API
router.delete("/find/:id/:hotelId", DeleteRoomById) //ADMIN CAN DELETE ROOM

module.exports = router