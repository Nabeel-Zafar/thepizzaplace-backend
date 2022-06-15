const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orders = new Schema({
    items: [{ type: Schema.Types.Mixed }],
    totalAmount:{type:Number},
    orderDate: {type: Date},
    orderNumber: {type: String}
}, {
    collection: 'orders'
})

module.exports = mongoose.model('orders', orders)