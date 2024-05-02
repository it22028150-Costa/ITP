import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import {useReactToPrint} from "react-to-print";
import './ViewOrders.css'

const ViewOrders = () =>{
    const componentPDF=useRef();
    const [orders,setOrder] = useState([])
    const [searchkey,setsearchkey]=useState('');

//read
    useEffect(() => {
      const fetchOrders = async () => {
          try{
              const response = await axios.get('http://localhost:3500/payorders',{
                  params: {useremail: localStorage.getItem('currentUser')
                  }
              });
              setOrder(response.data);
              console.log(orders)
          }catch(err){
              console.error(err);
          }
      };
      fetchOrders(); 

    },[]);

    const paynow = (e1) => {
        localStorage.setItem('payOrder',e1) 
    };



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
        const filteredData = orders.filter(orders =>
            orders.orderDetails.toLowerCase().includes(searchKey.toLowerCase())
        );
        setOrder(filteredData);
    }

    return(
        <div className="showorders">
             <div className='searchbtn'>
        <input  type="text" onChange={(e)=>setsearchkey(e.target.value)} placeholder='search' className='in'/> <t></t> 
       
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
        <br></br>   <br></br>
                <div ref={componentPDF} style={{width:'100%'}}>
 <table>
              
              
 <tr>
              <th> Description</th>
              <th>Qty</th>
              <th>Amount</th>
              <th>Paid</th>
              </tr>
  

              <tbody>
                  { 
                     orders.map((e1)=>{
                      return(
                          <tr key={e1._id}> 
                            <td> {e1.orderDetails}</td> 
                            <td> {e1.orderQty}</td> 
                            <td> {e1.orderAmount}</td> 
                            <td> {`${e1.paymentStatus === false ? 'Not Paid' : 'Paid'}`}</td>
                             
                           
                            <td>
                              <a onClick={()=>paynow(e1._id)} href={`${e1.paymentStatus === false ? '/finance/pay' : 'Download Receipt'}`} >{`${e1.paymentStatus === false ? 'Pay Now' : 'Download Receipt'}`}</a>
                              
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
export default ViewOrders;