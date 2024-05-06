const mongoose=require("mongoose")
const appointmentschema=mongoose.Schema({
    patientemail:String,
    doctor:String,
    date:String,
    time:String,
    remarks:String,
    amount:Number,
    paid:{
        type: Boolean,
        default: false
    },

},{
    timestamps:true

})

const appointmentmodel=mongoose.model("Appointments",appointmentschema)

module.exports = appointmentmodel;
