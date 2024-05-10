import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "../../complain.css";
function AddComplaints() {
  const navigate = useNavigate(); // Changed variable name to navigate
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    time: "",
    phone: "",
    type: "",
    complaindetail: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await sendRequest();
  
    window.location.href ='/complain';
  };
  const sendRequest = async () => {
    await axios.post("http://localhost:3500/complaindb/create_complaint", {
      name: inputs.name,
      gmail: localStorage.getItem("currentUser"),
      date: inputs.date,
      time: inputs.time,
      phone: inputs.phone,
      type: inputs.type,
      complaindetail: inputs.complaindetail,
    });
  };
  return (
    <div className="bk_img">
      <div className="fom_main">
        <form onSubmit={handleSubmit} className="from_nw">
          <label className="form_box_item_lable">Full Name</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="text"
            required
            value={inputs.name}
            onChange={handleChange}
            name="name"
          />
          <br></br>
          
          
          
          <br></br>
          <label className="form_box_item_lable">date</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="date"
            required
            value={inputs.date}
            onChange={handleChange}
            name="date"
          />
          <br></br>
          <label className="form_box_item_lable">time</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="time"
            required
            value={inputs.time}
            onChange={handleChange}
            name="time"
          />
          <br></br>
          <label className="form_box_item_lable">phone</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="text"
            required
            value={inputs.phone}
            onChange={handleChange}
            name="phone"
          />
          <br></br>
          <label className="form_box_item_lable">Select complaint type</label>
          <br></br>
          <select
            className="form_box_item_input"
            value={inputs.type}
            onChange={handleChange}
            name="type"
            required
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
            required
            value={inputs.complaindetail}
            onChange={handleChange}
            name="complaindetail"
          />
          <br></br>
          <button type="submit" className="admin_form_cneter_btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddComplaints;
