import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import './appointmentdetails.css'
import {useReactToPrint} from "react-to-print";

function AppointmentDetails(){
    const componentPDF=useRef();
    const [showdiscounts,setshowdiscounts]=useState([]);
    const [searchkey,setsearchkey]=useState('');

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:3500/appointments/_appointment")
    console.log(data.data.success)
    if(data.data.success){
        setshowdiscounts(data.data.data)
    }
}catch(err){
    alert(err)
}
}
useEffect(()=>{
    getfetchdata()   
},[])

//delete
const handledelete= async(id)=>{
    const data=await axios.delete("http://localhost:3500/appointments/delete_appointment/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("Order item deleted Successfully!")
    }
}
//generatePDF
const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"show services ",
    onAfterPrint:()=>alert("data save in pdf")
})
//serach
const handlesearch = (e) => {

    filterdata(searchkey);
}
const filterdata = (searchKey) => {
    const filteredData = showdiscounts.filter(customer =>
        customer.date.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowdiscounts(filteredData);
}

    return(
        <div className="showorders">
             <div className='searchbtn'>
        <input  type="date" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> Search </button>
        </div>   
        <br></br>   <br></br>
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>
              
              
 <tr>
              <th>Select Doctor</th>
              <th>Select Date</th>
              <th>Select Time </th>
              <th>Add Remarks to Doctor</th>
              
              </tr>
  

              <tbody>
                  { 
                     showdiscounts.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.doctor}</td> 
                            <td> {e1.date}</td> 
                            <td> {e1.time}</td> 
                            <td> {e1.remarks}</td> 
                            
                         
                           
                            <td>
                              <a href={`/appointment/updateappointment/${e1._id}`}>Edit Appointment</a>
                              <button onClick={()=>handledelete(e1._id)}>Delete Appointment</button>
                            </td>
                          </tr>
                      )

              })
                  }
              </tbody>
  </table>
  </div>   <br></br>   <br></br>
  <button onClick={generatePDF}>Download Report</button>
        </div>
    )
}
export default AppointmentDetails;