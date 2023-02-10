const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sneaker = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        brandName: { type: String, required: true },
        color: { type: String, required: true },
        price: { type: Number, required: true },
        style: { type: String, required: true },

    },
    { timestamps: true },
)

module.exports = mongoose.model('Sneaker', Sneaker)