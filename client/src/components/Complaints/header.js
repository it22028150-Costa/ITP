
import './header.css'
import {Outlet} from 'react-router-dom'

function Header(){
    return(
        <div>
<div class="navbar">
  <a href="/complaint/add">Add Complaint</a>
  <a href="/complaint">Complaints</a>
</div>
      <div>
        <Outlet/>
      </div>
        </div>
    )
}
export default Header