import { useState } from "react";
import axios from "axios";
import './register.css'


function Register(){
    const [order,setorder]=useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
    })

    const [error, seterror] = useState("");

    const handleOnchange=(e)=>{
        const {value,name}=e.target
        setorder((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }

    const handleValidation = (e) => {
        if (!order.email.match(/\+@\S+\.\S+/)){
            seterror("Invalid email address");
            return false;
        }
        seterror("");
        return true;
    }
    
    const handleSubmit=async(e)=>{
     
       e.preventDefault();
       if (handleValidation()){
        try{
            const data=await axios.post("https://localhost:3500/fitnessuser/create_user",order);
            console.log(data)
            alert("Registration Successful!");
        }catch (error){
            console.error("Error:",error);
            //Handle error here//
        }
    }
         
     
    }


    return(
        <div className="add-order">
        
<h2>Registation Form</h2>
    <form onSubmit={handleSubmit}>
    <lable>First Name:</lable>
    <input type="text" id="fname" name="fname" onChange={handleOnchange}/><br></br>
    <lable>Last Name :</lable>
    <input type="text" id="lname" name="lname" onChange={handleOnchange}/><br></br>
    <lable>Email:</lable>
    <input type="text" id="email" name="email" onChange={handleOnchange}/><br></br> 
    <lable>Paasword:</lable>
    <input type="text" id="password" name="password" onChange={handleOnchange}/><br></br> 
    <button type="submit">Register</button>
    
    </form><br></br> 
    
        </div>
    )
}
export default Register;