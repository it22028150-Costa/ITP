import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
const URL = "http://localhost:3500/complaindb";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
function ComplaintDetails() {
  //fetch data
  const [complain, setComplain] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setComplain(data.complain));
  }, []);
  /*PDF Function */
  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: " Details Report",
    onafterprint: () => alert(" Details Report Successfully Download !"),
  });
  /*Search Function */
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filtered = data.complain.filter((complain) =>
        Object.values(complain).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setComplain(filtered);
      setNoResults(filtered.length === 0);
    });
  };
 
  return (
    <div className="bk_img">
      <div className="fulbofy">
      <div className="btn_set">
        <div>
          <tr>
            <td className="">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                name="search"
                className="serch_inpt"
                placeholder="Search Here..."
              ></input>
            </td>

            <td>
              <button onClick={handleSearch} className="booknow_btn">
                Search
              </button>
            </td>
          </tr>
        </div>
        <button className="booknow_btn" onClick={handlePrint}>
          Generate Report
        </button>
      </div>
      <div className="bok_box_admin" ref={ComponentsRef}>
        <h1 className="topic_complain">
          Customers Complain
          <span className="sub_topic_complain"> Details..!</span>
        </h1>
        <br></br>
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
                    to={`/replycomplain/${complain._id}`}
                    className="booknow_btn"
                  >
                    Reply
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      </div>
    </div>
  );
}

export default ComplaintDetails;
