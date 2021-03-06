const Booking = require("../../models/Booking");

exports.getCheckout = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.json(bookings);
  } catch (e) {
    console.log(e);
  }
};

exports.createCheckout = async (req, res) => {
  try {
    await Booking.create({
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      dateFrom: req.body.dateFrom,
      dateTo: req.body.dateTo,
      homeType: req.body.homeType,
      services: req.body.services,
      home: req.body.home,
    });
    res.status(200).json("successful");
  } catch (e) {
    res.status(400).json({ status: "unsuccessful", error: e });
  }
};
