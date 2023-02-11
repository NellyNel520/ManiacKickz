const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Brand = new Schema(
    {
      brand: { type: String, required: true },
      logo: { type: String, required: true }
    },
    { timestamps: true }
  )


module.exports = Brand