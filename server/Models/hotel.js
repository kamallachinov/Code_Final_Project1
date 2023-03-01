const mongoose = require('mongoose')

const { Schema } = mongoose

mongoose.set('strictQuery', true)
const hotelSchema = new Schema({
    name: { type: String, required: true },
    // price: { type: Number, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    distance: { type: String, required: true },
    photos: { type: [String] },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    rooms: { type: [String] },
    cheapestPrice: { type: Number, required: true },
    featured: { type: Boolean, default: false },

    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }]
}, { timestamps: true })

const Hotel = mongoose.model("Hotel", hotelSchema)

module.exports = Hotel