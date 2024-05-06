const express = require('express')
const router = express.Router()
const path = require('path')
let User = require("../models/User")
const {getAllUsers, createNewUser, updateUser, deleteUser,findUser,getEveryUser,loginuser} = require('../controllers/usersController')

router.get('/',getAllUsers)
router.get('/all',getEveryUser)
router.post('/add',createNewUser)
router.patch('/update',updateUser)
router.delete('/:id',deleteUser)
router.get('/get',findUser)
router.get('/loginpg',loginuser)


module.exports = router
