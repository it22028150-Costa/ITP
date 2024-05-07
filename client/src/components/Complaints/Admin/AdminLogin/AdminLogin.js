import React, { useState } from "react";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      // Successful login, you can redirect or set some flag indicating admin is logged in
      alert("Login successful");
      window.location.href = "/admincomplaindash";
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="bk_img">
      <div className="fom_main">
        <form onSubmit={handleLogin} className="from_nw">
          <div>
            <label className="form_box_item_lable">Username:</label>
            <input
              className="form_box_item_input"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="form_box_item_lable">Password:</label>
            <input
              type="password"
              className="form_box_item_input"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="admin_form_cneter_btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
