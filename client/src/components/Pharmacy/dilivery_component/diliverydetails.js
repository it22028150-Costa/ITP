import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import './diliverydetails.css'
import {useReactToPrint} from "react-to-print";

function DiliveryDetails(){
    const componentPDF=useRef();
    const [showdiscounts,setshowdiscounts]=useState([]);
    const [searchkey,setsearchkey]=useState('');


const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:3500/pharmacy/del/_dilivery")
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
    const data=await axios.delete("http://localhost:3500/pharmacy/del/delete_dilivery/"+id)
    if(data.data.success){
        getfetchdata()
        console.log(data.data.message)
        alert("Order item deleted Successfully!")
    }
}

const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"show services ",
    onAfterPrint:()=>alert("data save in pdf")
})

const handlesearch = (e) => {

    filterdata(searchkey);
}
const filterdata = (searchKey) => {
    const filteredData = showdiscounts.filter(customer =>
        customer.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowdiscounts(filteredData);
}

    return(
        <div className="showorders">
             <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='Search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}>Search </button>
        </div>   
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>
              
              
 <tr>
              <th> Name</th>
              <th>Contact Number</th>
              <th>Address</th>
              <th>Medicine Name</th>
              <th>Dosage</th>
              <th>Quantity</th>
              <th>Instruction</th>
              <th>Payment Method</th>
              <th>Prescription's Name</th>
              <th>Additional Notes</th>
              <th>Consent</th>
              </tr>
     


              <tbody>
                  { 
                     showdiscounts.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.name}</td> 
                            <td> {e1.contact}</td> 
                            <td> {e1.address}</td> 
                            <td> {e1.m_name}</td> 
                            <td> {e1.dosage}</td> 
                            <td> {e1.quantity}</td> 
                            <td> {e1.instructions}</td> 
                            <td> {e1.p_name}</td> 
                            <td> {e1.m_details}</td> 
                            <td> {e1.special_instruction}</td> 

                            <td>
                              <a href={`/updatediliver/${e1._id}`}>Edit Details</a>
                              <button onClick={()=>handledelete(e1._id)}>Delete Details</button>
                            </td>
                          </tr>
                      )

              })
                  }
              </tbody>
  </table>
  </div>
  <button onClick={generatePDF}>Download Report</button>
        </div>
    )
}
export default DiliveryDetails;