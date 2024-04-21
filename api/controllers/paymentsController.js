const Card = require('../models/CardDetails')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt') 

//@desc Get Cards assigned to a user
//@route Get /payments
//@access Private

const getSavedDetails = asyncHandler(async(req,res) => {
    const {useremail} = req.query
    const list = await Card.find({'useremail': useremail}).select().lean() //Lean makes sure that the methods are not returned with the response
    if (!list?.length){
        return res.status(400).json({message: `No card details for ${useremail} found`})
    }
    res.json(list)
})



//@desc Create New Card
//@route POST /payments
//@access Private

const savePaymentDetails = asyncHandler(async(req,res) => {
    console.log(req.body);
    const {nameoncard,useremail,cardno,merchant,expdate,cvv} = req.body

    //Confirm data
    if(!nameoncard || !cardno || !merchant || !expdate || !cvv){
        return res.status(400).json({message: 'All fields are required'})
    }


    const cardObject =  {nameoncard, useremail, cardno, merchant,expdate,cvv}

    // Create and store new user

    const card = await Card.create(cardObject)

    if (card) {
        res.status(201).json({message: `New card for ${useremail} created`})
    } else {
        res.status(400).json({message: 'Invalid user data recieved'})
    }
})



//@desc Delete a card
//@route DELETE /payments
//@access Private

const deleteCardDetails = asyncHandler(async(req,res) => {
    const { id } = req.params;

    if(!id){
        return res.status(400).json({message: 'Card ID Required'})
    }

    const card = await Card.findById(id).exec()

    if(!card){
        return res.status(400).json({message: 'Card not found'})
    }
    
    const result = await card.deleteOne()

    const reply = ` ${card.cardno} with Name ${card.nameoncard} has been deleted` 

    res.json(reply)


})



module.exports = {
    getSavedDetails, savePaymentDetails,deleteCardDetails
}





// //@desc Update a User
// //@route PATCH /users
// //@access Private

// const updateUser = asyncHandler(async(req,res) => {
//     const { id, username, roles, active, password } = req.body

//     //Confirm data 
//     if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean'){
//         return res.status(400).json({message: 'All fields are required'})
//     }

//     const user = await User.findByID(id).exec()

//     if(!user){
//         return res.status(400).json({message:'User not found'})
//     }

//     const duplicate = await User.findOne({username}).lean().exec()
//     //Allow updates to the original user
//     if (duplicate && duplicate?._id.toString() !== id){
//         return res.status(409).json({message: 'Duplicate Username'})
        
//     }

//     user.username = username
//     user.roles = roles
//     user.active = active

//     if(password){
//         //Hash Password
//         user.password = await bcrypt.hash(password,10) // salt rounds
//     }

//     const updatedUser = await user.save()

//     res.json({message: `${updatedUser.username} updated`})

// })