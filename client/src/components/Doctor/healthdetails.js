import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import './healthdetails.css'
import {useReactToPrint} from "react-to-print";

function HealthDetails(){
    const componentPDF=useRef();
    const [showdiscounts,setshowdiscounts]=useState([]);
    const [searchkey,setsearchkey]=useState('');

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:3500/doctor/listdr")
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
    const data=await axios.delete("http://localhost:3500/doctor/listdr"+id)
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
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
        <br></br>   <br></br>
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>
              
              
 <tr>
              <th> Name</th>
              <th>Email Address</th>
              <th>Specialization </th>
              <th>Hospital</th>
              <th>Available Date</th>
              </tr>
  

              <tbody>
                  { 
                     showdiscounts.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.name}</td> 
                            <td> {e1.email}</td> 
                            <td> {e1.specialization}</td> 
                            <td> {e1.date}</td> 
                            
                         
                           
                            <td>
                              <a href={`/doctor/updatehealth/${e1._id}`}>Edit Details</a>
                              <button onClick={()=>handledelete(e1._id)}>Delete Details</button>
                            </td>
                          </tr>
                      )

              })
                  }
              </tbody>
  </table>
  </div>   <br></br>   <br></br>
  <button onClick={generatePDF}>Download Repoart</button>
        </div>
    )
}
export default HealthDetails;