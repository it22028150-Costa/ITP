const mongoose=require("mongoose")
const diliverychema=mongoose.Schema({
    name:String,
    contact:String,
    phone:String,
    address:String,
    m_name:String,
    dosage:String,
    quantity:String,
    instructions:String,
    payment_method:String,
    p_name:String,
    m_details:String,
    special_instruction:String,
  
   

},{
    timestamps:true

})

const dilivermodel=mongoose.model("dilivery",diliverychema)

module.exports = dilivermodel;
