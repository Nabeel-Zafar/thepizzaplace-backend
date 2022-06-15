const express = require('express');
const app = express();
const mainItemRoute = express.Router();
const router = require('express').Router();

// Employee model
let mainItem = require('../models/main-item-model');

// Add mainItem
mainItemRoute.route('/createMainItem').post((req, res, next) => {
  console.log('req.body------>',req.body)
    mainItem.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All mainItem
mainItemRoute.route('/getAllmainItem').get((req, res) => {
    mainItem.find((error, data) => {
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
mainItemRoute.route('/updatemainItem/:id').put((req, res, next) => {
    mainItem.findByIdAndUpdate(req.params.id, {
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
mainItemRoute.route('/deletemainItem/:id').delete((req, res, next) => {
    mainItem.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = mainItemRoute;