const { Schema, model } = require("mongoose");

const HouseScheme = new Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  vip: {
    type: Boolean,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  ready: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = model("House", HouseScheme);
