import React,{useState} from "react"
import axios from "axios";
import "./Forms.css";


export default function Signup(){

    const[email,setEmail] = useState("");
    const[contact,setContact] = useState("");
    const[name,setName] = useState("");
    const[gender,setGender] = useState("");
    const[dob,setDob] = useState("");
    const[address,setAddress]= useState("");
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[showSuccessModal,setShowSuccessModal] = useState("false");


    const handleChange = (event) => {
        const { value } = event.target;
        // Use a regular expression to remove non-alphabetic characters
        const alphaOnly = value.replace(/[^a-zA-Z]/g, '');
        // Update the state with the alphabetic-only value
        setName(alphaOnly);
      };
    


    function sendData(e){
        e.preventDefault();
        const newUser ={
            name,
            email,
            contact,
            gender,
            dob,
            address,
            username,
            password

        }

        axios.post("http://localhost:3500/user/add",newUser).then(()=>{
            alert("User Created")
            setShowSuccessModal(true);
            window.location.href ='/loginpg';

           
        }).catch((err)=>{
            alert(err.response.data.message)

            
        })

        }

        const handleOKButtonClick =()=> {
            setShowSuccessModal(false);
            window.location.href ='/public';
        };


    return(

        <div class ="containerlmwuseradmin" style={{ marginTop: "50px" }}>

<h1 >SIGN UP</h1>

            <form onSubmit={sendData}  style={{ fontSize: 20, fontWeight: "bold", textAlign: "left" }}>

            <div class="mb-3">
                <label for="name" >Name</label>
                <input type="name" class="form-control" id="name" placeholder="Enter your name"
               onChange={handleChange}/>
            </div>

            <div class="mb-3">
                <label for="email" >Email </label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email"
                onChange ={(e)=>{
                    setEmail(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="contact" >Phone number </label>
                <input type="tel" class="form-control" id="contact" placeholder="Enter your contact number" maxLength={10} minLength={10}
                onChange ={(e)=>{
                    setContact(e.target.value);
                }}/>
            </div>


        <div className="mb-3">
            <label> Gender: &nbsp;&nbsp;</label> 
                <label htmlFor="male">Male  </label>
                <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={gender === "male"} // Check if gender is male
                    onChange={(e) => {
                    setGender(e.target.value);
                    }} /> &nbsp;&nbsp;

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
<br/>



            <div class="mb-3">
                <label for="dob">Date of Birth: &nbsp;&nbsp;&nbsp;</label>
                <input type="date" id="dob" name="dob"   onChange ={(e)=>{
                    setDob(e.target.value);
                }}/>
            </div>

            <br/>


            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="name"  class="form-control" id="address" rows="3" placeholder="Enter your address"
                   onChange ={(e)=>{
                    setAddress(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="username" >Username </label>
                <input type="username" class="form-control" id="username" placeholder="Enter your username"
                onChange ={(e)=>{
                    setUsername(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="password" >Password </label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password"
                onChange ={(e)=>{
                    setPassword(e.target.value);
                }}/>
            </div>
<br/>
            <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}