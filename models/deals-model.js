const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let deals = new Schema({
    dealName: {type: String},
    dealItem:{type: String},
    dealPrice:{type: Number}
}, {
   collection: 'deals'
})

module.exports = mongoose.model('deals', deals)