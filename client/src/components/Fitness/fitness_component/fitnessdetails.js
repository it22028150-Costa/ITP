import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import './fitnessdetails.css'
import {useReactToPrint} from "react-to-print";

function FitnessDetails(){
    const componentPDF=useRef();
    const [showdiscounts,setshowdiscounts]=useState([]);
    const [searchkey,setsearchkey]=useState('');

//read
const getfetchdata=async()=>{
    try{
    const data=await axios.get("http://localhost:3500/fitness/_fitness")
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
    const data=await axios.delete("http://localhost:3500/fitness/delete_fitness/"+id)
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
        customer.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowdiscounts(filteredData);
}

    return(
        <div className="showorders">
             <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>
              
              
 <tr>
              <th> Name</th>
              <th>Address </th>
              <th>Email Address</th>
              <th>Fitness Goals</th>
              <th>Preferences</th>
              <th>Action</th>
              </tr>
     
         

              <tbody>
                  { 
                     showdiscounts.map((e1)=>{
                      return(
                          <tr> 
                            <td> {e1.name}</td> 
                            <td> {e1.address}</td> 
                            <td> {e1.u_email}</td> 
                            <td> {e1.f_goals}</td> 
                            <td> {e1.preferences}</td> 
                         
                           
                            <td>
                              <a href={`/fitness/updatfitness/${e1._id}`}>Edit Details</a>
                              <button onClick={()=>handledelete(e1._id)}>Delete Details</button>
                            </td>
                          </tr>
                      )

              })
                  }
              </tbody>
  </table>
  </div>
  <button onClick={generatePDF}>Download Repoart</button>
        </div>
    )
}
export default FitnessDetails;