import { useState } from "react";
import axios from "axios";
import './complaint.css'


function Complaint(){
    const [order,setorder]=useState({
        contact:"",
        c_email:"",
        c_type:"",
        description:"",
     
    })

    const handleonchange=(e)=>{
        const {value,name}=e.target
        setorder((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    
    const handlesubmit=async(e)=>{
     
       e.preventDefault()
       const data=await axios.post("http://localhost:3500/complaints/create_complaint",order)
          console.log(data)
          alert("complaints added!")
         
     
    }


    return(
        <div className="add-order">
      
     <h2>Raise Complaint</h2>
    <form onSubmit={handlesubmit}>
    <lable>Contact Number:</lable>
    <input type="text" id="contact" name="contact" onChange={handleonchange}/><br></br>
    <lable>Email Address  :</lable>
    <input type="text" id="c_email" name="c_email" onChange={handleonchange}/><br></br>
    <lable>Complaint Type:</lable>
    <select id="c_type" name="c_type" onChange={handleonchange}>
        <option>medical care issue</option>
        <option>coommunicatin</option>
        <option>staff behavaiour</option>
        <option>facility conditions</option>
        <option>administrative issues</option>
    </select><br></br><br></br><br></br>
    <lable>Description:</lable>

    <textarea  type="text" id="description" name="description" height="10px" onChange={handleonchange}/><br></br> 
    <button>Submit</button>
  
    </form><br></br> 
   
        </div>
    )
}
export default Complaint;