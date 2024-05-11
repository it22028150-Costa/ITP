import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

function MyComplaints() {
  const [complain, setComplain] = useState([]);
  const componentRef = useRef();
  const [searchkey,setsearchkey]=useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/complaindb/getcomplaints`, {
          params: { gmail: localStorage.getItem('currentUser') }
        });
        setComplain(response.data);
        console.log(response.data)
      } catch (err) {
        console.error(err);
        alert(err.response.data.message)
      }
    };
    fetchOrders();
  }, []);

  const deleteHandler = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Complain?"
    );
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:3500/complaindb/delete_complaint`, {
          params: { id: _id }
        });
        window.alert("Complain deleted successfully!");
        window.location.reload();
      } catch (error) {
        console.error("Error deleting Complain details:", error);
      }
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });


      //serach
      const handlesearch = (e) => {

        filterdata(searchkey);
    }
    const filterdata = (searchKey) => {
        const filteredData = complain.filter(complain =>
            complain.name.toLowerCase().includes(searchKey.toLowerCase())
        );
        setComplain(filteredData);
    }
  

  return (
    <div className="bk_img">
      <button
        className="home_btn_set"
        onClick={() => (window.location.href = "/addcomplain")}
      >
        Add Complain
      </button>
      <button className="home_btn_set" onClick={handlePrint}>
        Print
      </button>
      <div class='searchbtnfn'>
                <input  type="text" onChange={(e)=>setsearchkey(e.target.value)} placeholder='Details..' class='infn'/> <t></t> 
       
                <button  id='search-btnfn'  onClick={(e)=>handlesearch(e)}> Search </button>
            </div>

      <div className="tbl_data" ref={componentRef}>
        <table className="table_details_admin">
          <thead>
            <tr className="tble_card_details_tr">
              <th className="admin_tbl_th">Name</th>
              <th className="admin_tbl_th">Phone</th>
              <th className="admin_tbl_th">time</th>
              <th className="admin_tbl_th">type</th>
              <th className="admin_tbl_th">complaindetail</th>
              <th className="admin_tbl_th">reply</th>
              <th className="admin_tbl_th">Actions</th>
            </tr>
          </thead>
          {complain.map((complain, index) => (
            <tbody key={index}>
              <tr>
                <td className="admin_tbl_td">{complain.name}</td>
                <td className="admin_tbl_td">{complain.phone}</td>
                <td className="admin_tbl_td">{complain.time}</td>
                <td className="admin_tbl_td">{complain.type}</td>
                <td className="admin_tbl_td">{complain.complaindetail}</td>
                <td className="admin_tbl_td">
                  {complain.reply ? complain.reply : "Not yet replied"}
                </td>
                <td className="admin_tbl_td">
                  <Link
                    onClick={() => localStorage.setItem("complainNo", complain._id)}
                    to={`/updatecomplain`}
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
