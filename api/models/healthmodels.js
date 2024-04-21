const mongoose=require("mongoose")
const healthschema=mongoose.Schema({
    name:String,
    email:String,
    specialization:String,
    hospital:String,
    date:String,

  
 
     
 
   

},{
    timestamps:true

})

const healthmodel=mongoose.model("Healths",healthschema)

module.exports = healthmodel;
