import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import axios from "axios";
function UpdateComplaints() {
  const [inputs, setInputs] = useState({});
  const [profile, setProfile] = useState();
  const [name, setName] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [phone, setPhone] = useState()
  const [type, setType] = useState()
  const [complaindetail, setdetail] = useState()
  

 


  useEffect(()=>{
    const fetchHandler = async ()=>{
        try{
            const response = await axios
            .get(`http://localhost:3500/complaindb/getone`,{
              params: {id:localStorage.getItem("complainNo")}
            });
            console.log(response.data);
            setProfile(response.data);
           

            
            
            
        }catch(err){
            console.error(err);
        }

    };

    fetchHandler();

    },[]);


function handleSubmit(e){
  e.preventDefault();
  const gmail = localStorage.getItem('currentUser')
  const id = profile._id
  const updateComplaint = {
      gmail, id
  };

  if (name) {
      updateComplaint.name = name;
  }

  if (date) {
      updateComplaint.date = date;
  }

  if (time) {
      updateComplaint.time = time;
  }

  if (phone) {
    updateComplaint.phone = phone;
  }

  if (type) {
    updateComplaint.type= type;
  }

  if (complaindetail) {
    updateComplaint.complaindetail = complaindetail;
  }

  



  console.log(updateComplaint)

  axios.patch("http://localhost:3500/complaindb/update",updateComplaint).then(()=>{
      alert("User Updated")
     
  }).catch((err)=>{
      alert(err)
  })

  }




  // const sendRequest = async () => {
  //   try {
  //     await axios.put(`http://localhost:3500/complaindb/${_id}`, {
  //       name: String(inputs.name),
  //       gmail: String(inputs.gmail),
  //       date: String(inputs.date),
  //       time: String(inputs.time),
  //       phone: String(inputs.phone),
  //       type: String(inputs.type),
  //       complaindetail: String(inputs.complaindetail),
  //     });
  //   } catch (error) {
  //     // Handle error if needed
  //     console.error("Error updating details:", error);
  //   }
  // };
  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   const newValue = type === "checkbox" ? checked : value;

  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [name]: newValue,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(inputs);
  //   sendRequest().then(() => {
  //     window.alert("Update successfully!");
  //     history("/mycomplain");
  //   });
  // };
  return (
    <div className="bk_img">
      {profile && (
      <div className="fom_main">
        <form onSubmit={handleSubmit} className="from_nw">
          <label className="form_box_item_lable">Full Name</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="text"
            onChange={(e)=>{setName(e.target.value)}}
            placeholder={profile.name}
          />
          <br></br>
          
          
          <label className="form_box_item_lable">date</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="date"
            
            onChange={(e)=>{setDate(e.target.value)}}
            placeholder={profile.date}
          />
          <br></br>
          <label className="form_box_item_lable">time</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="time"
            
            onChange={(e)=>{setTime(e.target.value)}}
            placeholder={profile.time}
          />
          <br></br>
          <label className="form_box_item_lable">phone</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="text"
            
            onChange={(e)=>{setPhone(e.target.value)}}
            placeholder={profile.phone}
          />
          <br></br>
          <label className="form_box_item_lable">Select complaint type</label>
          <br></br>
          <select
            className="form_box_item_input"
            onChange={(e)=>{setType(e.target.value)}}
            
          >
            <option value="">Select complaint type</option>
            <option value="medical care issue">medical care issue</option>
            <option value="communication">communication</option>
            <option value="staff behaviour">staff behaviour</option>
            <option value="facility conditions">facility conditions</option>
            <option value="administrative issues">administrative issues</option>
          </select>

          <br></br>
          <label className="form_box_item_lable">Complain</label>
          <br></br>
          <textarea
            rows={5}
            className="form_box_item_input"
            type="text"
            
            onChange={(e)=>{setdetail(e.target.value)}}
            placeholder={profile.complaindetail}
          />
          <br></br>
          <button type="submit" className="admin_form_cneter_btn">
            Update
          </button>
        </form>
      </div>
      )}
    </div>

    




  );
}

export default UpdateComplaints;
