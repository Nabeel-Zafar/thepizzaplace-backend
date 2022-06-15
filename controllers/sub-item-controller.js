const express = require('express');
const app = express();
const subItemRoute = express.Router();
const router = require('express').Router();

// Employee model
let subItem = require('../models/sub-item-model');

// Add mainItem
subItemRoute.route('/createSubItem').post((req, res, next) => {
  console.log('req.body------>',req.body)
  subItem.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All mainItem
subItemRoute.route('/getAllsubItem').get((req, res) => {
    subItem.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update mainItem
subItemRoute.route('/updatesubItem/:id').put((req, res, next) => {
  subItem.findByIdAndUpdate(req.params.id, {
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
// mainItemRoute.route('/updatemainItem/:id').put((req, res, next) => {
//     mainItem.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Data updated successfully')
//     }
//   })
// })

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

module.exports = subItemRoute;