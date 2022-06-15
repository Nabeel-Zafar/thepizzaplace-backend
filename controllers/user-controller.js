const express = require('express');
const app = express();
const userRoute = express.Router();
const router = require('express').Router();

// Employee model
let user = require('../models/user-model');

// Add mainItem
userRoute.route('/createUser').post((req, res, next) => {
  console.log('req.body------>',req.body)
  user.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All mainItem
userRoute.route('/getAllUsers').get((req, res) => {
    user.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single mainItem
// mainItemRoute.route('/read/:id').get((req, res) => {
//     mainItem.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// Update mainItem
userRoute.route('/updateUser/:id').put((req, res, next) => {
  user.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete mainItem
// mainItemRoute.route('/deletemainItem/:id').delete((req, res, next) => {
//     mainItem.findOneAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = userRoute;