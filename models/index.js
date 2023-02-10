const mongoose = require('mongoose')
const Sneaker = require('./sneaker')
const Brand = require('./brand')

const Sneaker = mongoose.model('Sneaker', Sneaker)
const Brand = mongoose.model('Brand', Brand)

module.exports = {
    Sneaker,
    Brand
}