const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Brand = new Schema(
    {
      brandName: { type: String, required: true },
      brandLogo: { type: String, required: true }
    },
    { timestamps: true }
  )


module.exports = Brand