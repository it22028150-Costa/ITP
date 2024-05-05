import React,{useState,useEffect} from "react"
import axios from "axios";  
import { Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
//import "./Forms.css";


export default function DoctorLogin(){
    
    const[emailadd,setEmail] = useState("");
    const[passwordadd,setPassword] = useState("");
    const navigate = useNavigate();
    const[showSuccessModal,setShowSuccessModal] = useState("false");
    

    function log(e){
        
        e.preventDefault()
        axios.get(`http://localhost:3500/doctor/get`,{params:{email: emailadd, password:passwordadd}}).
        then((result)=>{
            
            if(result.data.message === "Login successful"){     
                console.log(result.data.message)              
            }
            localStorage.setItem('currentDoctor',emailadd)
            console.log(`The current user is ${localStorage.getItem('currentDoctor')}`)
            setShowSuccessModal(true);
            window.location.href ='/doctor/reservations';  
        }).catch((err)=>{
            console.log(err)
            alert(err.response.data.message)
        })
        }

        const handleOKButtonClick =()=> {
            setShowSuccessModal(false);
            //window.location.href ='/loginpg';
            navigate('/Doctorloginpg');                

        };

    return(
        <div>
            <label style={{ fontSize: 30, fontWeight: "bold", textAlign:"center" }}>HealthHub Login</label>
            <h5>Please login to proceed</h5>
        <div className="container">
            <h5>Welcome back !</h5>
            

        <form onSubmit={log}  style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>

        <header style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}> LOGIN </header>

            <div class="mb-3">
                <label for="email" > Email </label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" 
                onChange ={(e)=>{
                    setEmail(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="password" >Password </label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password"
                onChange ={(e)=>{
                    setPassword(e.target.value);
                }}/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
        </div>
    )
}