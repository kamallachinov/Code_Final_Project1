const express = require("express")
const { getOrders, GetOrderById, UpdateOrderById, DeleteOrderById, CreateOrder, getOrdersForRoom } = require("../Controllers/order")
const { verifyToken } = require("../utils/verifyToken")
const jwt = require("jsonwebtoken")
const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user, you authenticated, logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, you are logged in and you can delete your accaunt1")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello user, you are logged in and you can delete all accaunts")
// })

router.post("/", CreateOrder)

//GET ALL ORDERS
router.get("/user_orders/:userId", getOrders)
router.get("/room_order", getOrdersForRoom)

//GET ORDER BY ID
router.get("/rooms/:id", GetOrderById)

//UPDATE ORDER
router.put("/:id", UpdateOrderById)

//DELETE ORDER FROM API
router.delete("/:id", DeleteOrderById)



module.exports = router