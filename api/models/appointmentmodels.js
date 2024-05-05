const mongoose=require("mongoose")
const appointmentschema=mongoose.Schema({
    doctor:String,
    date:String,
    time:String,
    remarks:String,

},{
    timestamps:true

})

const appointmentmodel=mongoose.model("Appointments",appointmentschema)

module.exports = appointmentmodel;
