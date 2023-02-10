const mongoose = require('mongoose')
const sneakerSchema = require('./sneaker')
const brandSchema = require('./brand')

const Sneaker = mongoose.model('Sneaker', sneakerSchema)
const Brand = mongoose.model('Brand', brandSchema)

module.exports = {
    Sneaker,
    Brand
}