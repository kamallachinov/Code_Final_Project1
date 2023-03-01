const mongoose = require('mongoose')

const { Schema } = mongoose

mongoose.set('strictQuery', true)
const orderSchema = new Schema({
    userId: { type: String, required: true },
    roomId: { type: String, required: true }
}, { timestamps: true })

const Order = mongoose.model("Order", orderSchema)

module.exports = Order