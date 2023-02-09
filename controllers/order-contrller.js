const express = require('express');
const app = express();
const createOrderRoute = express.Router();
const router = require('express').Router();

// Employee model
let subItem = require('../models/sub-item-model');
let order = require('../models/order-model')

// Add mainItem
createOrderRoute.route('/createOrder').post((req, res, next) => {
  order.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All mainItem
createOrderRoute.route('/getMenu').get((req, res) => {
    subItem.aggregate([
        {
          '$group': {
            '_id': {
              'ID': '$mainItem.ID', 
              'Name': '$mainItem.mainItemName'
            }, 
            'subItems': {
              '$push': '$$ROOT'
            }
          }
        }
      ]).then((data) => {
            res.json(data)
      })
      .catch(err => {
          res.json(err)
      })
})


createOrderRoute.route('/getOrders').post((req, res) => {
  console.log('req.body',req.body)

  let body = req.body;

  let query = [
    {
      '$unwind': {
        'path': '$items'
      }
    }, {
      '$match': {
        'orderDate': {
          '$gt': new Date(body.startDate), 
          '$lt': new Date(body.endDate)
        }
      }
    }  
  ]
if(body.mainItemID){
  query[1].$match["items.mainItem.ID"] = body.mainItemID;
}

if(body.subItemID){
  query[1].$match["items._id"] = body.subItemID;
}

  order.aggregate(query).then((data) => {
        res.json(data)
  })
  .catch(err => {
      res.json(err)
  })
})



createOrderRoute.route('/serachByOrder/:id').post((req, res) => {

  console.log('req.body',req.params.id)

  let orderNumber = req.params.id;

  let query = [
    {
      '$unwind': {
        'path': '$items'
      }
    }, {
      '$match': {
        'orderNumber': orderNumber,
      }
    }  
  ]
  console.log('query',query)
  order.aggregate(query).then((data) => {
        res.json(data)
  })
  .catch(err => {
      res.json(err)
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

module.exports = createOrderRoute;