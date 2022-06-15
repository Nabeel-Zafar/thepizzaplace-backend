const express = require('express');
const app = express();
const createDealRoute = express.Router();
const router = require('express').Router();

// Employee model
let createDeal = require('../models/deals-model');

// Add mainItem
createDealRoute.route('/createDeals').post((req, res, next) => {
  console.log('req.body------>',req.body)
  createDeal.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All mainItem
createDealRoute.route('/getAllDeals').get((req, res) => {
    createDeal.find((error, data) => {
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
createDealRoute.route('/updateDeals/:id').put((req, res, next) => {
  createDeal.findByIdAndUpdate(req.params.id, {
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

module.exports = createDealRoute;