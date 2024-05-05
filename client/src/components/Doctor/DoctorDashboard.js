import  { useEffect, useState,useRef } from 'react'
import axios from "axios"
import {useReactToPrint} from "react-to-print";

const ViewReservations = () =>{
    const componentPDF=useRef();
    const [reservations,setReservations] = useState([])
    const [searchkey,setsearchkey]=useState('');

//read
    useEffect(() => {
      const fetchReservations = async () => {
          try{
              const response = await axios.get('http://localhost:3500/doctor/reservations',{
                  params: {doctormail: "aranasinghe@collective.com"
                  }
              });
              setReservations(response.data);
              console.log(reservations)
          }catch(err){
              console.error(err);
          }
      };
      fetchReservations(); 

    },[]);

   



    //generatePDF
    const generatePDF=useReactToPrint({
        content:()=>componentPDF.current,
        documentTitle:"show services ",
        onAfterPrint:()=>alert("data save in pdf")
    })


    // //serach
    // const handlesearch = (e) => {

    //     filterdata(searchkey);
    // }
    // const filterdata = (searchKey) => {
    //     const filteredData = reservations.filter(orders =>
    //         reservations.orderDetails.toLowerCase().includes(searchKey.toLowerCase())
    //     );
    //     setOrder(filteredData);
    // }

    return(
        <div class="showordersfn">
            <div class="viewnavfn">
            {/* <div class='searchbtnfn'>
                <input  type="text" onChange={(e)=>setsearchkey(e.target.value)} placeholder='Details..' class='infn'/> <t></t> 
       
                <button  id='search-btnfn'  onClick={(e)=>handlesearch(e)}> Search </button>
            </div> */}
            <div class="searchbtnfn" >
            <button onClick={generatePDF}>Download Report</button>   
                <br></br>   <br></br>
            </div>    
            </div> 

            <div class="viewtablefn">  
            <div ref={componentPDF} style={{width:'100%'}}>
                    <table class="paymenttable">
                
                
                            <tr className='headerrowfn'>
                                <th class="headerfn">Date </th>
                                <th class="headerfn">Time</th>
                                <th class="headerfn">Patient Name</th>
                                <th class="headerfn">Remarks</th>
                                
                            </tr>
                

                        <tbody>
                            { 
                                reservations.map((e1)=>{
                                return(
                                    <tr class="tablerowfn" key={e1._id}> 
                                        <td class="cellfn" id="celldetail"> {e1.date}</td> 
                                        <td class="cellfn" id="cellqty"> {e1.time}</td> 
                                        <td class="cellfn" id="cellamount"> {e1.patientname}</td> 
                                        <td class="cellfn" id="cellremarks"> {e1.remarks}</td> 

                                        
                                    
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
export default ViewReservations
