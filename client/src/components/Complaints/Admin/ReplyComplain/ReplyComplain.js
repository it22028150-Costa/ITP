import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import axios from "axios";
function ReplyComplain() {
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
        reply: String(inputs.reply),
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
      window.alert("reply send successfully!");
      history("/admincomplaindash");
    });
  };
  return (
    <div className="bk_img_sub">
      <div className="fom_main">
        <form onSubmit={handleSubmit}  className="from_nw">
          <label className="form_box_item_lable">Full Name</label>
          <br></br>
          <input
            className="form_box_item_input"
            type="text"
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
          >
            <option value="">Select complaint type</option>
            <option value="a">Type A</option>
            <option value="b">Type B</option>
            <option value="c">Type C</option>
            <option value="d">Type D</option>
            <option value="e">Type E</option>
          </select>

          <br></br>
          <label className="form_box_item_lable">Complain</label>
          <br></br>
          <textarea
            rows={3}
            className="form_box_item_input"
            type="text"
            readOnly
            value={inputs.complaindetail}
            onChange={handleChange}
            name="complaindetail"
          />
          <br></br>
          <label className="form_box_item_lable">Reply</label>
          <br></br>
          <textarea
            rows={3}
            className="form_box_item_input"
            type="text"
            required
            value={inputs.reply}
            onChange={handleChange}
            name="reply"
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

export default ReplyComplain;
