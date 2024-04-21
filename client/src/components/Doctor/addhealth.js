import { useState } from "react";
import axios from "axios";
import './health.css'


function Health(){
    const [order,setorder]=useState({
        name:"",
    email:"",
    specialization:"",
    hospital:"",
    date:"",
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
       const data=await axios.post("http://localhost:3500/doctor/",order)
          console.log(data)
          alert("Details added successfully!")
         
     
    }


    return(
        <div className="add-order">
 
<h2>Helath Form</h2>
    <form onSubmit={handlesubmit}>
    <lable> Name:</lable>
    <input type="text" id="name" name="name" onChange={handleonchange}/><br></br>
    <lable>Email:</lable>
    <input type="text" id="email" name="email" onChange={handleonchange}/><br></br> 
    <lable>Specialization  :</lable>
    <input type="text" id="specialization" name="specialization" onChange={handleonchange}/><br></br>
    <lable>Hospital:</lable>
    <input type="text" id="hospital" name="hospital" onChange={handleonchange}/><br></br> 
    <lable>Available Date:</lable>
    <input type="date" id="date" name="date" onChange={handleonchange}/><br></br> <br></br> 
    <button id="hbtn">Add Details</button>

    </form><br></br> 
   
        </div>
    )
}
export default Health;