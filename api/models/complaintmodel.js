const mongoose=require("mongoose")
const complaintschema=mongoose.Schema({
    contact:String,
    c_email:String,
    c_type:String,
    description:String,
 
     
 
   

},{
    timestamps:true

})

const complaintmodel=mongoose.model("Complaints",complaintschema)

module.exports = complaintmodel;
