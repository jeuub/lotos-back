const House = require("../../models/House");
const Booking = require("../../models/Booking");

exports.createHouse = async (req, res) => {
  try {
    let data = await House.create({
      number: req.body.number,
      vip: req.body.vip,
      capacity: req.body.capacity,
      price: req.body.price,
      ready: true,
    });
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};

exports.getHouses = async (req, res) => {
  try {
    let data = await House.find();
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};

exports.getAvailableDate = async (req, res) => {
  try {
    let bookings = await Booking.find();
    let busyBooking = [];

    bookings.forEach((booking) => {
      if (
        Number(req.param("from")) <= booking._doc.dateTo &&
        Number(req.param("to")) >= booking._doc.dateFrom
      ) {
        busyBooking.push(booking._doc.home);
      }
    });
    let data = await House.find({ number: { $nin: busyBooking } });
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};
