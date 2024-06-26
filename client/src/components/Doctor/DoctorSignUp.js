import React,{useState} from "react"
import axios from "axios";
// import "../Forms.css";


export default function DoctorSignup(){

    const[Email,setEmail] = useState("");
    const[contactNumber,setcontactNumber] = useState("");
    const[name,setName] = useState("");
    const[gender,setGender] = useState("");
    const[hospital,sethospital]= useState("");
    const[specialization,setspecialization] = useState("");
    const[password,setPassword] = useState("");
    const[showSuccessModal,setShowSuccessModal] = useState("false");




    function sendData(e){
        e.preventDefault();
        const newDoctor ={
            name,
            Email,
            contactNumber,
            gender,
            hospital,
            specialization,
            password

        }

        axios.post("http://localhost:3500/doctor/add",newDoctor).then(()=>{
            alert("Doctor Created")
            setShowSuccessModal(true);
            window.location.href ='/doctor/DoctorLogin';

           
        }).catch((err)=>{
            console.log(err)
            alert(err.response.data.message)
        })

        }

        const handleOKButtonClick =()=> {
            setShowSuccessModal(false);
            window.location.href ='/public';
        };


    return(
        <div class="background">

        <div class ="containerdrsignup">


            <form onSubmit={sendData}  style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
            <header>SIGN UP</header>
            <div class="mb-3">
                <label for="name" >Name </label>
                <input type="name" class="form-control" id="name" placeholder="Enter your name"
                onChange ={(e)=>{
                    setName(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="Email" >Email </label>
                <input type="Email" class="form-control" id="Email" placeholder="Enter your email"
                onChange ={(e)=>{
                    setEmail(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="contactNumber" >Phone number </label>
                <input type="tel" class="form-control" id="contact" placeholder="Enter your contact number" maxLength={10} minLength={10}
                onChange ={(e)=>{
                    setcontactNumber(e.target.value);
                }}/>
            </div>


        <div className="mb-3">
            <label>Choose your gender:</label> 
                <label htmlFor="male">Male  </label>
                <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={gender === "male"} // Check if gender is male
                    onChange={(e) => {
                    setGender(e.target.value);
                    }} />

                <label htmlFor="female">   Female</label>
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={gender === "female"} // Check if gender is female
                        onChange={(e) => {
                        setGender(e.target.value);
                        }}/>
        </div>


            <div class="mb-3">
                <label for="hospital" class="form-label">hospital</label>
                <input type="name"  class="form-control" id="hospital" rows="3" placeholder="Enter your hospital"
                   onChange ={(e)=>{
                    sethospital(e.target.value);
                }}/>

            </div>

            <div class="mb-3">
                <label for="specialization" >specialization </label>
                <input type="username" class="form-control" id="username" placeholder="Enter your specialization"
                onChange ={(e)=>{
                    setspecialization(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="password" >Password </label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password"
                onChange ={(e)=>{
                    setPassword(e.target.value);
                }}/>
            </div>

            <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
        </div>
    )
}