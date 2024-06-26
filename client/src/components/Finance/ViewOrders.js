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
              alert(err.response.data.message)
              window.location.href ='/header';
          }
      };
      fetchOrders(); 

    },[]);

    const paynow = (e1) => {
        console.log(e1);
        localStorage.setItem('payOrderId',e1._id)
        localStorage.setItem('payOrderDetail',e1.doctor);
        localStorage.setItem('payOrderAmount',e1.orderAmount);
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
            orders.doctor.toLowerCase().includes(searchKey.toLowerCase())
        );
        setOrder(filteredData);
    }

    return(
        <div class="showordersfn">
            <div class="viewnavfn">
            <div class='searchbtnfn'>
                <input  type="text" onChange={(e)=>setsearchkey(e.target.value)} placeholder='Details..' class='infn'/> <t></t> 
       
                <button  id='search-btnfn'  onClick={(e)=>handlesearch(e)}> Search </button>
            </div>
            <div class="searchbtnfn" >
            <button onClick={generatePDF}>Download Report</button>   
                <br></br>   <br></br>
            </div>    
            </div> 

            <div class="viewtablefn">  
            <div ref={componentPDF} style={{width:'100%'}}>
                    <table class="paymenttable">
                
                
                            <tr className='headerrowfn'>
                                <th class="headerfn"> Description</th>
                                <th class="headerfn">Date</th>
                                <th class="headerfn">Time</th>
                                <th class="headerfn">Amount</th>
                                <th class="headerfn">Paid</th>
                                <th class="headerfn">Link</th>
                            </tr>
                

                        <tbody>
                            { 
                                orders.map((e1)=>{
                                return(
                                    <tr class="tablerowfn" key={e1._id}> 
                                        <td class="cellfn" id="celldetail"> {e1.doctor}</td> 
                                        <td class="cellfn" id="celldetail"> {e1.date}</td>
                                        <td class="cellfn" id="celldetail"> {e1.time}</td>
                                        <td class="cellfn" id="cellamount"> {e1.amount}</td> 
                                        <td class="cellfn" id="cellstatus"> {`${e1.paid === false ? 'Not Paid' : 'Paid'}`}</td>
                                        
                                    
                                        <td class="cellfn" id="cellbutton">
                                        <a onClick={()=>paynow(e1)} href={`${e1.paid === false ? '/finance/pay' : ''}`}  >{`${e1.paid === false ? 'Pay Now' : 'Payment Complete'}`}</a>
                                        
                                        </td>
                                    
                                    </tr>
                                    )

                                })
                            }
                        </tbody>
                     </table>
            </div>
            </div>    
             <br></br>   <br></br>
            
        </div>
    )
}
export default ViewOrders
