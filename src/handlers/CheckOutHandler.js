const Booking = require('../models/Booking');

exports.getCheckOutHandler = async (req, res) => {
    try{
        const bookings = await Booking.find({})
        res.json(bookings)
    }catch(e) {
        console.log(e)
    }
}

exports.postCheckOutHandler = async (req, res) => {
    try{
        await Booking.create({
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            dateFrom: req.body.dateFrom,
            dateTo: req.body.dateTo,
            homeType: req.body.homeType,
            services: req.body.services,
        });
        res.status(200).json('success')
    }catch(e) {
        console.log(e)
    }
}

