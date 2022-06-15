const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mainItem = new Schema({
    mainItemName: {type: String}
}, {
   collection: 'mainItem'
})

module.exports = mongoose.model('mainItem', mainItem)