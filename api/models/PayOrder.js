const mongoose = require('mongoose')

const payOrderSchema = new mongoose.Schema({
    useremail: {
        type: String
        
    },

    orderDetails: {
        type: String
    },

    orderQty: {
        type: Number,

    },
    
    orderAmount:{
        type: Number,
    },

    paymentStatus:{
        type: Boolean,
        default: false
    },

    paymentMethod:{
        type: String
    },

    cardId:{
        type: String
    },
},{
    collection: 'payOrder' 
});

module.exports = mongoose.model('PayOrder', payOrderSchema)