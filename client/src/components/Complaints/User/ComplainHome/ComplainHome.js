import React from "react";

function ComplainHome() {
  return (
    <div>
      <div className="bk_img">
        <div className="home_btn_set_fullbox">
          <div className="btn_box_home">
            <button
              className="home_btn_set"
              onClick={() => (window.location.href = "/addcomplain")}
            >
              Add Complain
            </button>
            <br></br>
            <button
              className="home_btn_set"
              onClick={() => (window.location.href = "/mycomplain")}
            >
              My Complain
            </button>
            <br></br>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplainHome;
