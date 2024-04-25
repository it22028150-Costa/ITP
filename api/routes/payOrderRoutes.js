const express = require('express')
const router = express.Router()
const {createOrderDetails} = require('../controllers/payOrderController')
  
// router.get('/',getSavedDetails)
router.post('/',createOrderDetails)
// router.delete('/:id',deleteCardDetails)    
    

module.exports = router    