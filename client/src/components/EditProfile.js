import React,{useState,useEffect} from "react"
import axios from "axios";  
import { Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Forms.css";

export default function EditProfile(){

    const[email,setEmail] = useState("");
    const[contact,setContact] = useState("");
    const[profile,setProfile] = useState("");
    const[name,setName] = useState("");
    const[gender,setGender] = useState("");
    const[dob,setDob] = useState("");
    const[address,setAddress]= useState("");
    const[showSuccessModal,setShowSuccessModal] = useState("false");


    useEffect(()=>{
        const edit = async ()=>{
            try{
                const response = await axios.get('http://localhost:3500/user',{
                    params: {email: localStorage.getItem('currentUser')
                }
            
                });
                console.log(response.data);
                setProfile(response.data[0]);
                
                
            }catch(err){
                console.error(err);
            }

        };

        edit();

    },[]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try{
 
    //     }
    // }






    function sendData(e){
        e.preventDefault();
        const email = localStorage.getItem('currentUser')
        const updateUser = {
            email,
        };
    
        if (name) {
            updateUser.name = name;
        }
    
        if (contact) {
            updateUser.contact = contact;
        }
    
        if (address) {
            updateUser.address = address;
        }
    
        // Check if there are any fields to update
        if (Object.keys(updateUser).length === 1) {
            alert("No fields to update.");
            return;
        }

        console.log(updateUser)

        axios.patch("http://localhost:3500/user/update",updateUser).then(()=>{
            alert("User Updated")
           
        }).catch((err)=>{
            alert(err)
        })

        }


        const deleteUser = async () => {
            try {
              console.log(profile._id)
              const email = "lihinimaleesha24@gmail.com"
              await axios.delete(`http://localhost:3500/user/${profile._id}`);
              setShowSuccessModal(true);
              window.location.href ='/';              
              
            } catch (err) {
              console.error(err);
            }
          };
        

    return(

        <div class ="containerlmwuseradmin">


            <form onSubmit={sendData} style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
            <header>MY PROFILE</header>
            <div class="mb-3">
                <label for="name" >Name </label>
                <input type="name" class="form-control" id="name" placeholder={profile.name}
                onChange ={(e)=>{
                    setName(e.target.value);
                }}/>
            </div>



            <div class="mb-3">
                <label for="contact" >Phone number </label>
                <input type="tel" class="form-control" id="contact" placeholder={profile.contact}
                onChange ={(e)=>{
                    setContact(e.target.value);
                }}/>
            </div>


            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="address"  class="form-control" id="address" rows="3" placeholder= {profile.address}
                   onChange ={(e)=>{
                    setAddress(e.target.value);
                }}/>
            </div>


            <button type="submit" class="btn btn-primary" >Update Profile</button>
            <br/>            <br/>

            <button type="submit" class="btn btn-primary" onClick={deleteUser}>Delete Profile</button>


            </form>

        </div>
    )
}