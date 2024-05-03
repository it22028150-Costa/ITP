const mongoose=require("mongoose")
const fitnessschema=mongoose.Schema({
    name:String,
    address:String,
    u_email:String,
    f_goals:String,
    preferences:String,





 
     
 
   

},{
    timestamps:true

})

const fitnessmodel=mongoose.model("fitness",fitnessschema)

module.exports = fitnessmodel;
