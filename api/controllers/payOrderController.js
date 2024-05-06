const Order = require('../models/appointmentmodels')
const asyncHandler = require('express-async-handler')
const Card = require('../models/CardDetails')
 

//@desc Get Orders assigned to a user 
//@route Get /payOrder
//@access Private

const getOrderDetails = asyncHandler(async(req,res) => {
    const {useremail} = req.query

    if(!useremail){
        return res.status(400).json({message: `Please Sign into view Payment Details `})
    }

    const list = await Order.find({'patientemail': useremail}).select().lean() //Lean makes sure that the methods are not returned with the response
    if (!list?.length){
        return res.status(400).json({message: `No Order details for ${useremail} found`})
    }
    res.json(list)
    console.log(list)
})


// //@desc Update a User
// //@route PATCH /users
// //@access Private

const updateOrder = asyncHandler(async(req,res) => {
    console.log(req.body)
    const { _id, selectedCard,cvv } = req.body
    

    //Confirm data 
    if (!_id || !selectedCard || !cvv){
        return res.status(400).json({message: 'Please provide required details'})
    }

    const card = await Card.findById(selectedCard)

    if(card.cvv !== cvv){
        return res.status(400).json({message: 'CVV Code Incorrect'})
    }



    const order = await Order.findById(_id).exec()

    if(!order){
        return res.status(400).json({message:'Order not found'})
    }
    console.log("Setting true")
    order.paid = true;
    
    console.log(order)
    const updatedOrder = await order.save()

    res.json({message: `Order updated`})

})



//@desc Create New Order
//@route POST /payments
//@access Private

const createOrderDetails = asyncHandler(async(req,res) => {
    console.log(req.body);
    const {useremail,orderDetails,orderQty,orderAmount,paymentStatus} = req.body


    const orderObject =  {useremail,orderDetails,orderQty,orderAmount,paymentStatus}

    // Create and store new user

    const order = await Order.create(orderObject)

    if (order) {
        res.status(201).json({message: `New card for ${useremail} created`})
    } else {
        res.status(400).json({message: 'Invalid user data recieved'})
    }
})



//@desc Delete a card
//@route DELETE /payments
//@access Private

// const deleteCardDetails = asyncHandler(async(req,res) => {
//     const { id } = req.params;

//     if(!id){
//         return res.status(400).json({message: 'Card ID Required'})
//     }

//     const card = await Card.findById(id).exec()

//     if(!card){
//         return res.status(400).json({message: 'Card not found'})
//     }
    
//     const result = await card.deleteOne()

//     const reply = ` ${card.cardno} with Name ${card.nameoncard} has been deleted` 

//     res.json(reply)


// })



module.exports = {
    getOrderDetails, updateOrder, createOrderDetails
}




