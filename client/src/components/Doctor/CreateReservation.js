import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios";


const CreateOrder = () => {

    const [reservation, setreservation] = useState([]);
    const [doctormail, setmail] =useState("")
    const [date,setdate] = useState();
    const [time,settime] =useState();
    const [patientname,setpatientname] = useState();
    const [remarks,setremarks] = useState(); 
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const reservations = {doctormail,date,time,patientname,remarks};
            console.log(reservations);
            await axios.post('http://localhost:3500/doctor/createreservation',reservations);
            console.log('Card created form frontend');
            window.location.reload(true);

        }catch (err){
            console.error(err);
        }
    }
  return (
    <div class="paysummary">
                        <div class="createcard">
                            Create Card
                        </div>

                        <form class="cardform" onSubmit={handleSubmit}>
                            <div class="formitem">
                                <label class="lbl">Doctor Email:</label>
                                <input class="input" type="text" placeholder='Nemail' value={doctormail} onChange={(e) => setmail(e.target.value)} required/>
                            </div>
                            <div class="formitem">
                                <label class="lbl">Date:</label>
                                <input class="input" type="text" placeholder='NS DE COSTA' value={date} onChange={(e) => setdate(e.target.value)} required/>
                            </div>
                            <div class="formitem">
                                <label class="lbl">Time:</label>
                                <input class="input" type="text" value={time} onChange={(e) => settime(e.target.value)} required/>
                            </div>

                            <div class="formitem">
                                <label class="lbl">Patient Name:</label>
                                <input class="input" type="string" value={patientname} onChange={(e) => setpatientname(e.target.value)} required/>
                            </div>

                            <div class="formitem">
                                <label class="lbl">Remarks:</label>
                                <input class="input" type="string" value={remarks} onChange={(e) => setremarks(e.target.value)} required/>
                            </div>

                            
                                
                            

                            <button class="addbtn" type='submit'>Make Order</button>
                        
                        </form>
                        </div>
  )
}

export default CreateOrder