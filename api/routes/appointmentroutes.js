const express=require("express")



const appointmentmodel = require("../models/appointmentmodels");

const router = express.Router();


router.get("/_appointment",async(req,res)=>{
    const data= await appointmentmodel.find({})
  
    res.json({success:true,data:data})
})


router.post("/create_appointment",async(req,res)=>{
    console.log(req.body)
    const data=new appointmentmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


router.put("/update_appointment",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await appointmentmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




router.delete("/delete_appointment/:id",async(req,res)=>{
const id=req.params.id
const data=await appointmentmodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})




router.get("/count_appointment",async(req,res)=>{
    try{
        const users=await appointmentmodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"Order count successfully",data:data})
    }

})

router.get("/order_appointment/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const order = await appointmentmodel.findById(id);

        if (!order) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: order });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

router.get("/doctorlist", async(req,res) => {
    
    const {doctormail} = req.body
    console.log(doctormail)
    const list = await appointmentmodel.find({'doctormail': doctormail}).select().lean() //Lean makes sure that the methods are not returned with the response
    if (!list?.length){
        return res.status(400).json({message: `No Response`})
    }
    res.json(list)
})

module.exports = router;