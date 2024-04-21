const express = require('express')
const router = express.Router()
const paymentsController = require('../controllers/paymentsController')
const {deleteCardDetails,getSavedDetails,savePaymentDetails} = require('../controllers/paymentsController')
  
router.get('/',getSavedDetails)
router.post('/',savePaymentDetails)
router.delete('/:id',deleteCardDetails)    
    

module.exports = router    