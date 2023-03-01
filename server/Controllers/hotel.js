const Hotel = require("../Models/hotel");
const createError = require("../utils/error");


async function GetHotels(req, res, next) {
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (err) {
        res.status(200).json(err)
    }
}

async function GetHotelById(req, res) {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        res.status(200).json(err)
    }
}

async function UpdateHotelById(req, res, next) {
    try {
        const { id } = req.params
        const updatedHotel = await Hotel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}

async function DeleteHotelById(req, res, next) {
    try {
        const { id } = req.params
        await Hotel.findByIdAndDelete(id)
        res.status(200).json("Hotel has been deleted.")
    } catch (err) {
        next(err)
    }
}


async function CreateHotel(req, res, next) {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}


module.exports = {
    GetHotels, GetHotelById, UpdateHotelById, DeleteHotelById, CreateHotel
}