const express=require("express")


const complaintmodel = require("../models/complaintModel");

const router = express.Router();


router.get("/_complaint",async(req,res)=>{
    const data= await complaintmodel.find({})
  
    res.json({success:true,data:data})
})



router.get("/getcomplaints",async(req,res) => {
    
    const {gmail} = req.query
    

    if(!gmail){
        return res.status(400).json({message: `Please Sign into view Complaint Details`})
    }

    const list = await complaintmodel.find({'gmail': gmail}).select().lean() //Lean makes sure that the methods are not returned with the response
    if (!list?.length){
        return res.status(400).json({message: `No Complaints currently found, Please add a complaint to view your complaints`})
    }
    res.json(list)
    console.log(list)
})

router.get("/getone",async(req,res) => {
    console.log(req.query)
    const {id} = req.query

    console.log("id Start")
    console.log(id)
    console.log("id end")
    

    if(!id){
        return res.status(400).json({message: `Cannot find Complaint`})
    }

    const list = await complaintmodel.findById(id).exec()//Lean makes sure that the methods are not returned with the response
    console.log("Start of Console log")
    res.json(list)
    console.log(list)
})

    




router.post("/create_complaint",async(req,res)=>{
    const data=new complaintmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


router.patch("/update",async(req,res)=>{
    console.log(req.body)
    const {id,...rest}=req.body
    const data=await complaintmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




router.delete("/delete_complaint",async(req,res)=>{
const id=req.query.id
console.log(id)
const data=await complaintmodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})




router.get("/count_complaint",async(req,res)=>{
    try{
        const users=await complaintmodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"Order count successfully",data:data})
    }

})

router.get("/order_complaint/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const order = await complaintmodel.findById(id);

        if (!order) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: order });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});



module.exports = router;