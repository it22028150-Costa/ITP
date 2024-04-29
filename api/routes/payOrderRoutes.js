const express = require('express')
const router = express.Router()
const {createOrderDetails,getOrderDetails,updateOrder} = require('../controllers/payOrderController')
  
router.get('/',getOrderDetails)
router.post('/',createOrderDetails)
router.patch('/',updateOrder)    
    

module.exports = router    