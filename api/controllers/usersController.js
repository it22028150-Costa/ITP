let User = require("../models/User")
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt') 

//@desc Get all users
//@route Get /users
//@access Private

const getAllUsers = asyncHandler(async(req,res) => {
    console.log(req.query)
    const {email} = req.query
    console.log(email)
    const users = await User.find({'email':email}).select().lean()
    console.log(users)
    if (!users?.length){
        return res.status(400).json({message:`No user found with the email ${email}`})
    }
    res.json(users)    
    })



//@desc Create New User
//@route POST /users
//@access Private

const createNewUser = asyncHandler(async(req,res) => {

    const name = req.body.name;
    const email = req.body.email; 
    const contact = req.body.contact;
    const gender = req.body.gender;
    const dob = req.body.dob; 
    const address = req.body.address;
    const username = req.body.username; 
    const password = req.body.password; 

    const newUser = new User({
        name,
        email,
        contact,
        gender,
        dob,
        address,
        username,
        password

    })

    newUser.save().then(()=>{
        res.json("User Added")
    }).catch((err)=>{
        console.log(err);
    })

})



//@desc Update a User
//@route PATCH /users
//@access Private

const updateUser = asyncHandler(async(req,res) => {
    
    console.log(req.body)
    const {name,email,contact,address} = req.body;

    const updateUser = {
        name,
        contact,
        address
    }
    console.log(updateUser)

    const update = await User.findOneAndUpdate({"email":email},updateUser).then(()=>{
        res.status(200).send({status:"User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error updating"});
    })

   
})


//@desc Delete a User
//@route DELETE /users
//@access Private

const deleteUser = asyncHandler(async(req,res) => {
    const { id } = req.params;
    console.log(id)

    if(!id){
        return res.status(400).json({message: 'User ID Required'})
    }

    const card = await User.findById(id).exec()

    if(!card){
        return res.status(400).json({message: 'User not found'})
    }
    
    const result = await User.deleteOne()

    const reply = ` User has been deleted` 

    res.json(reply)


})




const findUser = asyncHandler(async(req,res) => {
    console.log(req.query)
    let {email, password}  = req.query;
    const currentuser = await User.findOne({email:email});
    if(password !== currentuser.password){
        return res.status(400).json({message:'Password Wrong'})
    }

    res.json({message:'Login succesful'})
    
})

const getEveryUser = asyncHandler(async(req,res)=>{
    const data= await User.find({})
    
  
    res.json(data)
})

module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser,findUser,getEveryUser
}