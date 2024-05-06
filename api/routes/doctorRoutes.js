const express = require('express')
const router = express.Router()
const {orderApp,countApp,deleteDoctor,updateDoctor,createDoctor,getDoctorDetails,getAllDoctors,createNewDoctor,updateDoctorr,deleteDoctorr,findDoctor,getAppointments,getdoctor,createReservations} = require('../controllers/doctorsController')


router.post('/createreservation',createReservations)
router.get('/listdr',getDoctorDetails)
router.post('/',createDoctor)
router.put('/:id',updateDoctorr)
router.get('/count',countApp)
router.get('/order/:id',orderApp)
router.get('/')

router.get('/',getAllDoctors)
router.post('/add',createNewDoctor)
router.patch('/update',updateDoctorr)
router.delete('/:id',deleteDoctorr)
router.get('/get',findDoctor)

router.get('/appointments',getAppointments)

router.get('/reservations',getdoctor)




module.exports = router    