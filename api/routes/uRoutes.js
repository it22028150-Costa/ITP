const express = require('express')
const router = express.Router()
const path = require('path')
let User = require("../models/User")
const {getAllUsers, createNewUser, updateUser, deleteUser,findUser} = require('../controllers/usersController')

router.get('/',getAllUsers)
router.post('/add',createNewUser)
router.patch('/update',updateUser)
router.delete('/:id',deleteUser)
router.get('/get',findUser)

module.exports = router


// router.route("/add").post((req,res)=>{
//     const name = req.body.name;
//     const email = req.body.email; 
//     const contact = req.body.contact;
//     const gender = req.body.gender;
//     const dob = req.body.dob; 
//     const address = req.body.address;
//     const username = req.body.username; 
//     const password = req.body.password; 

//     const newUser = new User({
//         name,
//         email,
//         contact,
//         gender,
//         dob,
//         address,
//         username,
//         password

//     })

//     newUser.save().then(()=>{
//         res.json("User Added")
//     }).catch((err)=>{
//         console.log(err);
//     })

// })



// router.route("/").get((req,res)=>{
//     User.find().then((users)=>{
//         res.json(users)
//     }).catch((err)=>{
//         console.log(err);
//     })
// })



// router.route("/update/:id").put(async (req,res)=>{
//     let userID = req.params.id;

//     const {name,dob,gender,email,username,password,contact,address} = req.body;

//     const updateUser = {
//         name,
//         email,
//         contact,
//         gender,
//         dob,
//         address,
//         username,
//         password
//     }

//     const update = await User.findByIdAndUpdate(userID,updateUser).then(()=>{
//         res.status(200).send({status:"User Updated"})
//     }).catch((err)=>{
//         console.log(err);
//         res.status(500).send({status:"Error updating"});
//     })

   
// })

// router.route("/delete/:id").delete(async(req, res)=>{
//     let userID = req.params.id;
//     await User.findByIdAndDelete(userID).then(()=>{
//         res.status(200).send({status:"User Deleted"});
//     }).catch((err)=>{
//         console.log(err.message);
//         res.status(500).send({status:"Error deleting"});})
// })


// router.route("/get/:email").get(async(req,res)=>{
//     let userID = req.params.email;
//     const user = await User.findOne(userID).then((users)=>{
//         res.status(200).send({status: "User fetched",users})
        
//     }).catch(()=>{
//         console.log(err.message);
//         res.status(500).send({status:"Error",error: err.message});
//     })
// })

