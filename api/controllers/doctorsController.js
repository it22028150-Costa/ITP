const healthmodel = require("../models/healthmodels");
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt') 
const Doctor = require("../models/Doctor")


const getDoctorDetails = asyncHandler(async(req,res)=>{
    const data= await Doctor.find({}).select().lean()
    console.log(data)
  
    res.json(data)
})

const createDoctor = asyncHandler(async(req,res)=>{
    const data=new healthmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


const updateDoctor = asyncHandler(async(req,res)=>{
    const {id,...rest}=req.body
    const data=await healthmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})

const deleteDoctor = asyncHandler(async(req,res)=>{
    const id=req.params.id
    const data=await healthmodel.deleteOne({_id:id})
    res.send({success:true,message:"deleted successfully",data:data})
    })


const countApp = asyncHandler(async(req,res)=>{
    try{
        const users=await healthmodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"Order count successfully",data:data})
    }

})   

const orderApp = asyncHandler(async (req, res) => {
    const id = req.params.id;

    try {
        const order = await healthmodel.findById(id);

        if (!order) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: order });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
})

    
module.exports = {
    getDoctorDetails,createDoctor,updateDoctor,deleteDoctor,countApp,orderApp
}