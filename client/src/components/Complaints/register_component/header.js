
import { Outlet } from 'react-router-dom'
import './header.css'
function Header(){
    return(
      <div>
        <div>
          <div class="navbar">
            <a href="/complaint">Home</a>
            <a href="/complaint/registerdetails">Register Details</a>
            <a href="/complaint/add">Add Complaint</a>
            <a href="/complaint/complaintdetails">Complaints</a>
          </div>

        </div>

        <Outlet/>
      </div>  
    )
}
export default Header