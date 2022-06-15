const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
      FullName: {type: String},
      EmailAdd: {type: String},
      Password: {type: String},
      Address: {type: String},
      ContactNo: {type: Number},
      IsAdmin:{type: String}
}, {
   collection: 'user'
})

module.exports = mongoose.model('user', user)