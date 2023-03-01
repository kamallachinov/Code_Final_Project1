const express = require("express")
const { GetUsers, GetUserById, UpdateUserById, DeleteUserById } = require("../Controllers/user")
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken")

const router = express.Router()

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user, you authenticated, logged in")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello user, you are logged in and you can delete your accaunt1")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello user, you are logged in and you can delete all accaunts")
})
//bele bir shey yazmisham admin olub olmamagini yoxlamag uchun



//GET ALL USERS
router.get("/", verifyAdmin, GetUsers)  //ONLY ADMIN CAN DO THIS

//GET USER BY ID
router.get("/:id", verifyUser, GetUserById)

//UPDATE USER
router.put("/:id", verifyUser, UpdateUserById)

//DELETE USER FROM API
router.delete("/:id", verifyUser, DeleteUserById)



module.exports = router