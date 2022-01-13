const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.DATABASE}`,  (e)=>{
    e?console.log(e):null;
});