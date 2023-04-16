const mongoose = require('mongoose');
assetSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    assets:Number,
    equity:String,
    fixedIncome:Number
})

module.exports = mongoose.model('Asset', assetSchema);