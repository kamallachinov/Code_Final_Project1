const mongoose = require('mongoose')

const { Schema } = mongoose

mongoose.set('strictQuery', true)

const roomSchema = new Schema({
    imgUrl: { type: String, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    count: { type: Number, required: true },
    roomNumbers: [
        { number: Number, unavailableDates: { type: [Date] } }]
}, { timestamps: true })

const Room = mongoose.model("final_project", roomSchema)

module.exports = Room