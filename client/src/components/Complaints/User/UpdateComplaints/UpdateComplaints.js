import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import axios from "axios";
function UpdateComplaints() {
  const [inputs, setInputs] = useState({});

  const history = useNavigate();
  const _id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:3500/complaindb/${_id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.complain));
    };
    fetchHandler();
  }, [_id]);
  const sendRequest = async () => {
    try {
      await axios.put(`http://localhost:3500/complaindb/${_id}`, {
        name: String(inputs.name),
        gmail: String(inputs.gmail),
        date: String(inputs.date),
        time: String(inputs.time),
        phone: String(inputs.phone),
        type: String(inputs.type),
        complaindetail: String(inputs.complaindetail),
      });
    } catch (error) {
      // Handle error if needed
      console.error("Error updating details:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setInputs((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => {
      window.alert("Update successfully!");
      history("/mycomplain");
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
          <label className="form_box_item_lable">gmail</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="email"
            required
            value={inputs.gmail}
            onChange={handleChange}
            name="gmail"
          />
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateComplaints;
