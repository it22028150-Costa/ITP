import React, { useEffect,useState } from 'react'
import './FinanceLayout.css'
import axios from "axios";
import './MakePayment.css';
import './ConfigureCards.css'
import { Link } from 'react-router-dom';

const ConfigureCards = () => {
    
    const [cards, setcards] = useState([]);
    const [nameoncard,setnameoncards] = useState('');
    // const [useremail,setuseremail] = useState('sanjana.test@gmail.com');
    const useremail = localStorage.getItem('currentUser')
    const [cardno,setcardno] = useState();
    const [merchant,setmerchant] =useState('Mastercard');
    const [expdate,setexpdate] = useState();
    const [cvv,setcvv] = useState();
    const [key, setKey] = useState(0);
    
    
    

    useEffect(() => {
        const fetchCards = async () => {
            try{
                const response = await axios.get('http://localhost:3500/payments',{
                    params: {'useremail': useremail
                    }
                });
                setcards(response.data);
                console.log(response.data);
            }catch(err){
                console.error(err);
            }
        };
        fetchCards(); 

    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const newCard = {nameoncard,useremail,cardno,merchant,expdate,cvv};
            console.log(newCard);
            await axios.post('http://localhost:3500/payments',newCard);
            console.log('Card created form frontend');
            window.location.reload(true);

        }catch (err){
            console.error(err);
        }
    }

    const deleteCard = async (cardid) => {
        try {
          
          const card = {cardid}
          console.log(card)
          await axios.delete(`http://localhost:3500/payments/${cardid}`);
          window.location.reload(true);
          
          
        } catch (err) {
          console.error(err);
        }
      };


    

  return (
    <div class='content'>

            <div class='layout'>
                    <div class="cards">
                        {cards.map(cards =>(
                            <div key={cards._id} class="card"> 
                                {cards.merchant === "Visa" ? (
                                    <img class="merchimg" src='/payimg/Visa.png' alt=''/>
                                ) : cards.merchant === "Mastercard" ? (
                                    <img class="merchimg" src='/payimg/MastercardLogo.png' alt=''/>
                                ) : (
                                    <img class="merchimg" src='/payimg/default.png' alt=''/>
                                )}
                                
                                <div class="cardinfo">
                                    <div class ="carddetail" id='cardno'>{cards.cardno}</div>
                                    <div class ="carddetail" id= 'cardname'>{cards.nameoncard}</div>
                                </div> 

                                <div class='cardicons'>
                                    
                                    <img class="cardicon" src='/payimg/delete.png' onClick={() => deleteCard(cards._id)} />
                                   
                                </div>    
           
                            </div>
                        ))}
                    </div>

                    <div class="paysummary">
                        <div class="createcard">
                            Create Card
                        </div>

                        <form class="cardform" onSubmit={handleSubmit}>
                            <div class="formitem">
                                <label class="lbl">Name on Card:</label>
                                <input class="input" type="text" placeholder='NS DE COSTA' value={nameoncard} onChange={(e) => setnameoncards(e.target.value)}/>
                            </div>
                            <div class="formitem">
                                <label class="lbl">Card No:</label>
                                <input class="input" type="text" id="cc-number" name="cc-number" inputmode="numeric"  maxlength="16" minLength="16" 
                                placeholder="xxxx xxxx xxxx xxxx" required  value={cardno} onChange={(e) => setcardno(e.target.value)}/>
                            </div>

                            <div class="formitem">
                                <label class="lbl">Merchant</label>
                                <div class="cardradio">
                                <input type="radio" id="html" name="fav_language" value="MasterCard"  checked/>
                                <label for="html">Mastercard</label><br></br>
                                <input type="radio" id="css" name="fav_language" onClick={(e) => setmerchant("Visa")} value="Visa"/>
                                <label for="css">Visa</label><br></br>
                                </div>
                                
                            </div>

                            <div class="formitem">
                                <label class="lbl">Exp Date:</label>
                                <input class="input" type="month" value={expdate} onChange={(e) => setexpdate(e.target.value)}/>
                            </div>
                            <div class="formitem">
                                <label class="lbl">CVV:</label>
                                <input class="input" type="number" value={cvv} onChange={(e) => setcvv(e.target.value)}/>
                            </div>

                            <button class="addbtn" type='submit'>Add Card</button>
                        
                        </form>
                    </div>
            </div>
    </div>        
    
  )
}

export default ConfigureCards