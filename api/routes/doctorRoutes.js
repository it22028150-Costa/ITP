const express = require('express')
const router = express.Router()
const {orderApp,countApp,deleteDoctor,updateDoctor,createDoctor,getDoctorDetails} = require('../controllers/doctorsController')

router.get('/listdr',getDoctorDetails)
router.post('/',createDoctor)
router.put('/:id',updateDoctor)
router.delete('/:id',deleteDoctor) 
router.get('/count',countApp)
router.get('/order/:id',orderApp)


module.exports = router    