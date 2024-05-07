import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MyComplaints() {
  const [complain, setComplain] = useState([]);
  const [gmail, setGmail] = useState("");
  const handleChange = (e) => {
    setGmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Check Gmail first
      const response = await axios.get(
        `http://localhost:3500/complaindb?gmail=${gmail}`
      );
      console.log("Response:", response.data);
      const relevantCard = response.data.complain.filter(
        (complain) => complain.gmail === gmail
      );
      //Display Related Card
      setComplain(relevantCard);

      if (relevantCard.length === 0) {
        alert("No  found,Plase enter valid Gmail address");
      }
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };
  /*Delete Code */
  const deleteHandler = async (_id) => {
    //delete Confirmation
    const confirmed = window.confirm(
      "Are you sure you want to delete this Complain?"
    );

    if (confirmed) {
      try {
        await axios.delete(`http://localhost:3500/complaindb/${_id}`);
        window.alert("Complain deleted successfully!");
        window.location.reload();
      } catch (error) {
        // Handle deletion error if needed
        console.error("Error deleting Complain details:", error);
      }
    }
  };
  return (
    <div className="bk_img">
      <div className="from_box_chek">
        <form className="from_nw" onSubmit={handleSubmit}>
          <label className="form_box_item_lable" htmlFor="gmail">
            Enter Your Gmail
          </label>
          <br></br>
          <input
            className="form_box_item_input"
            type="email"
            id="gmail"
            name="gmail"
            value={gmail}
            onChange={handleChange}
            required
          />
          <br></br>
          <button className="admin_form_cneter_btn" type="submit">
            Check
          </button>
        </form>
      </div>
      <div className="tbl_data">
        <table className="table_details_admin">
          <thead>
            <tr className="tble_card_details_tr">
              <th className="admin_tbl_th">Name</th>
              <th className="admin_tbl_th">Gmail</th>
              <th className="admin_tbl_th">Phone</th>
              <th className="admin_tbl_th">time</th>
              <th className="admin_tbl_th">type</th>
              <th className="admin_tbl_th">complaindetail</th>
              <th className="admin_tbl_th">reply</th>
              <th className="admin_tbl_th">Actions</th>
            </tr>
          </thead>
          {complain.map((complain, index) => (
            <tbody>
              <tr key={index}>
                <td className="admin_tbl_td">{complain.name}</td>
                <td className="admin_tbl_td">{complain.gmail}</td>
                <td className="admin_tbl_td">{complain.phone}</td>
                <td className="admin_tbl_td">{complain.time}</td>
                <td className="admin_tbl_td">{complain.type}</td>
                <td className="admin_tbl_td">{complain.complaindetail}</td>
                <td className="admin_tbl_td">
                  {complain.reply ? complain.reply : "Not yet replied"}
                </td>
                <td className="admin_tbl_td">
                  <Link
                    to={`/updatecomplain/${complain._id}`}
                    className="booknow_btn"
                  >
                    Update
                  </Link>
                  <button
                    className="btn_dash_admin_dlt"
                    onClick={() => deleteHandler(complain._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default MyComplaints;
