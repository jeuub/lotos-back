const { Schema, model } = require("mongoose");

const BookingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dateFrom: {
    type: Number,
    required: true,
  },
  dateTo: {
    type: Number,
    required: true,
  },
  homeType: {
    type: String,
    required: true,
  },
  services: [String],
  home: {
    type: String,
    required: true,
  },
});

module.exports = model("Booking", BookingSchema);
