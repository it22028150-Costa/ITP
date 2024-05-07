import React,{useState,useEffect} from "react"
import axios from "axios";  
import { Routes, Route,Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Forms.css";


export default function Login(){
    
    const[emailadd,setEmail] = useState("");
    const[passwordadd,setPassword] = useState("");
    const navigate = useNavigate();
    const[showSuccessModal,setShowSuccessModal] = useState("false");
    

    function log(e){
        
        e.preventDefault()
        axios.get(`http://localhost:3500/user/loginpg`,{params:{email: emailadd, password:passwordadd}}).
        then((result)=>{
            
            if(result.data.message === "Login successful"){     
                console.log(result.data.message)              
            }
            localStorage.setItem('currentUser',emailadd)
            console.log(`The current user is ${localStorage.getItem('currentUser')}`)
            setShowSuccessModal(true);
            window.location.href ='/header';  
        }).catch((err)=>{
            console.log(err)
            alert(err.response.data.message)
        })
        }

        const handleOKButtonClick =()=> {
            setShowSuccessModal(false);
            window.location.href ='/loginpg';                

        };

    return(
        <div>

<div>
                    <p><Link to="/doctor/doctorlogin">Doctor Login </Link></p>
                </div>

            <label style={{ fontSize: 30, fontWeight: "bold", textAlign:"center" }}>HealthHub Login</label>
            <h5>Please login to proceed</h5>
        <div className="containerlg">
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

            <div>
                    <p>Admin? <Link to="/admin/login">Login here</Link></p>
                </div>

        </div>
        </div>
    )
}