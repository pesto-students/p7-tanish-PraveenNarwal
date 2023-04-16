const mongoose = require('mongoose');

const loggeduserSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    year:Number,
    month:String,
    income: Number,
    expenses: Number,
    savings: Number
})

module.exports = mongoose.model('Loggeduser',loggeduserSchema);