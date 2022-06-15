const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subItem = new Schema({
    mainItem:{ID : { type: Schema.ObjectId }, mainItemName  :String},
    subItemName:{type: String},
    subItemPrice:{type: Number}
}, {
   collection: 'subItem'
})

module.exports = mongoose.model('subItem', subItem)