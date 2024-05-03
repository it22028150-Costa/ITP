const mongoose=require("mongoose")
const fitnessuserschema=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
 
     
 
   

},{
    timestamps:true

},{
    collection: 'fitnessUsers' 
})

const fitnessusermodel=mongoose.model("fitnessusers",fitnessuserschema)

module.exports = fitnessusermodel;
