const User = require("../Models/user");
const createError = require("../utils/error");


async function GetUsers(req, res, next) {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

async function GetUserById(req, res, next) {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

async function UpdateUserById(req, res, next) {
    try {
        const { id } = req.params
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}

async function DeleteUserById(req, res, next) {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.status(200).json("User has been deleted.")
    } catch (err) {
        next(err)
    }
}


module.exports = {
    GetUsers, GetUserById, UpdateUserById, DeleteUserById
}