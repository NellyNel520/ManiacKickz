const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sneaker = new Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        image: { type: String, required: true },
        colorWay: { type: String, required: true },
        releaseDate: { type: Date, required: true },
        price: { type: Number, required: true },
        styleCode: { type: String, required: true },
        size: [{ type: String, required: true }]

    },
    { timestamps: true },
)

module.exports = Sneaker