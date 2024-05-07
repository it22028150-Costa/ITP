const healthmodel = require("../models/healthmodels");
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt'); 
const Doctor = require("../models/Doctor");
const Appointment = require('../models/DoctorAppointment');
const drReservations = require('../models/DoctorReservation')


const updateDoctor = asyncHandler(async(req,res) => {
    
    console.log(req.body)
    const {name,email,contact,address} = req.body;

    const updateDoctor = {
        name,
        contact,
        address
    }
    console.log(updateDoctor)

    const update = await Doctor.findOneAndUpdate({"email":email},updateDoctor).then(()=>{
        res.status(200).send({status:"User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error updating"});
    })

   
})

//@desc Create New Order
//@route POST /payments
//@access Private

const createReservations = asyncHandler(async(req,res) => {
    console.log(req.body);
    const {doctormail,date,time,patientname,remarks} = req.body


    const reservation =  {doctormail,date,time,patientname,remarks}

    // Create and store new user

    const reserve = await drReservations.create(reservation)

    if (reserve) {
        res.status(201).json({message: `New card for  created`})
    } else {
        res.status(400).json({message: 'Invalid user data recieved'})
    }
})



const getDoctorDetails = asyncHandler(async(req,res)=>{
    const data= await Doctor.find({}).select().lean()
    console.log(data)
  
    res.json(data)
})


const getdoctor = asyncHandler(async(req,res) => {
    const {doctormail} = req.query
    const doctors = await drReservations.find({'doctormail': doctormail}).select().lean() //Lean makes sure that the methods are not returned with the response
    if (!doctors?.length){
        return res.status(400).json({message: `No card details for ${doctormail}} found`})
    }
    res.json(doctors)
})



 const getAppointments = asyncHandler(async(req,res) => {
  try {
    const appointments = await Appointment.find({ date: { $gte: new Date().setHours(0, 0, 0, 0) } });
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error)
    res.status(500).json({ message: 'Failed to fetch appointments' })
  }
})



const getAllDoctors = asyncHandler(async(req,res) => {
    console.log(req.query)
    const {email} = req.query
    console.log(email)
    const doctors = await User.find({'email':email}).select().lean()
    console.log(doctors)
    if (!doctors?.length){
        return res.status(400).json({message:`No user found with the email ${email}`})
    }
    res.json(doctors)    
    })



const createNewDoctor = asyncHandler(async(req,res) => {
        console.log(req.body)

        const { name, Email, password, hospital, gender, contactNumber, specialization, availability} = req.body 
         
    
        const doctor = {
            name,
            Email,
            password,
            hospital,
            gender,
            contactNumber,
            specialization,
            availability
    
        }

        console.log(doctor)

        const reserve = await Doctor.create(newDoctor)


        if (reserve) {
            res.status(201).json({message: `New Doctor  created`})
        } else {
            res.status(400).json({message: 'Invalid user data recieved'})
        }
    
        // Doctor.save().then(()=>{
        //     res.json("User Added")
        // }).catch((err)=>{
        //     console.log(err);
        // })
    
    })



 

const deleteDoctor = asyncHandler(async(req,res) => {
    const { id } = req.params;
    console.log(id)

    if(!id){
        return res.status(400).json({message: 'User ID Required'})
    }

    const card = await User.findById(id).exec()

    if(!card){
        return res.status(400).json({message: 'User not found'})
    }
    
    const result = await Doctor.deleteOne()

    const reply = ` User has been deleted` 

    res.json(reply)


})

const findDoctor = asyncHandler(async(req,res) => {
    console.log(req.query)
    let {email, password}  = req.query;
    const currentuser = await Doctor.findOne({Email:email});

    if(!currentuser){
        return res.status(400).json({message:'User Not Found'})
    }
    console.log(currentuser)
    if(password !== currentuser.password){
        return res.status(400).json({message:'Password Wrong'})
    }

    res.json({message:'Login succesful'})
    
})





const createDoctor = asyncHandler(async(req,res)=>{
    const data=new healthmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


const updateDoctorr = asyncHandler(async(req,res)=>{
    const {id,...rest}=req.body
    const data=await healthmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})

const deleteDoctorr = asyncHandler(async(req,res)=>{
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
    getDoctorDetails,createDoctor,updateDoctor,deleteDoctor,countApp,orderApp,getAllDoctors, createNewDoctor, updateDoctorr, deleteDoctorr,findDoctor,getAppointments,getdoctor,createReservations
}