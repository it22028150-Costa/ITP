import { useState } from "react";
import axios from "axios";
import './fitness.css'


function AddFitness(){
    const [order,setorder]=useState({
        name:"",
        address:"",
        u_email:"",
        f_goals:"",
        preferences:"",
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
       const data=await axios.post("http://localhost:3500/fitness/create_fitness",order)
          console.log(data)
          alert("add details successfully!")
         
     
    }


    return(
        <div className="add-order">
        
<h2>Add Fitness Form</h2>
    <form onSubmit={handlesubmit}>
    <lable>Name:</lable>
    <input type="text" id="name" name="name" onChange={handleonchange}/><br></br>
    <lable>Address:</lable>
    <input type="text" id="address" name="address" onChange={handleonchange}/><br></br>
    <lable>Email:</lable>
    <input type="email" id="u_email" name="u_email" onChange={handleonchange}/><br></br> 
    <lable>Fitness Goals:</lable>
    <input type="text" id="f_goals" name="f_goals" onChange={handleonchange}/><br></br> 
    <lable>Preferences:</lable>
    <input type="text" id="preferences" name="preferences" onChange={handleonchange}/><br></br> 
    <button id="fitbtnsub">Add Details</button>

    </form><br></br> 
   
        </div>
    )
}
export default AddFitness;