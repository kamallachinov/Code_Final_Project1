const express = require("express")
const { register, logIn, logOut } = require("../Controllers/authentication")
const router = express.Router()


router.post("/register", register)
router.post("/login", logIn)
router.get("/logout", logOut)

module.exports = router