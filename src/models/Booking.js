const {Schema, model} = require('mongoose')

const services = new Schema({
    name:String
})

const BookingSchema =  new Schema({
    name:{
        type: String,
        required:true,
    },
    surname:{
        type: String,
        required:true,
    },
    phone:{
        type: String,
        required:true,
    },
    dateFrom:{
        type: Date,
        required:true,
    },
    dateTo:{
        type: Date,
        required:true,
    },
    homeType: {
        type: String,
        required:true,
    },
    services: [
        services
    ]
});

module.exports = model('Booking', BookingSchema);