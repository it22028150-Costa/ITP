const mongoose=require("mongoose")
const registerschema=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
 
     
 
   

},{
    timestamps:true

},{
    collection: 'pharmaUsers' 
})

const registermodel=mongoose.model("users",registerschema)

module.exports = registermodel;
