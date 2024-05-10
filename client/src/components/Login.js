import React,{useState,useEffect} from "react"
import axios from "axios";  
import { Routes, Route,Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Forms.css";
import "./Login.css";



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
    <div class="background">
    <div className="containerlmwuseradmin" style={{ marginTop: "50px" }}>
    <header style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}> LOGIN </header>
    <h3>Welcome back !</h3>
    <form onSubmit={log} style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        <div className="mb-3">
            <label htmlFor="email"> Email </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }} />
        </div>
        <div className="mb-3">
            <label htmlFor="password">Password </label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <div class="logindir">
        <p>Doctor?<Link to="/doctor/doctorlogin">Login here </Link></p>
        <p>Admin? <Link to="/admin/login">Login here</Link></p> 
        
    </div>
</div>
</div>
    )
}