import React from 'react'
import "../Payment/Payment.css";
import paymentlogo from '../Images/payment.jpg';
import * as rb from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Ticket from '../Ticket/ticket';
import { db } from "../utils/firebase";
import {sleep} from "../utils/funs";

var price = localStorage.getItem('price')

const storePrice = async (from, to, flight, standard) => {
  const snapShot = await db.collection("Fares").get();
  try {
    snapShot.docs.forEach(doc => {
      if(doc.id == from) {
        console.log(doc.data()[to][flight][standard]);
        // alert(doc.data()[to][flight][standard]);
        localStorage.setItem('price', doc.data()[to][flight][standard]);
        console.log("store successfull");
        }
    })
  } catch (error) {
    localStorage.setItem('price', 'Flight not available');
    alert(error);
    console.log("store failed");
  }
}



export default function Payment({obj, navbarObj, pnrObj}) {
  
    

  return (
    <>
      <div className='qwer'>
      <rb.Button variant="primary" onClick={() => {var getnavbarBack = {navbarObj}.navbarObj.current; getnavbarBack('Navbar'); var backfunction = {obj}.obj.current; backfunction('form');}}>
          <KeyboardBackspaceIcon />
        </rb.Button>
              <h1 className='adj'>Payment Gateway</h1>
          <img className='middle' src={paymentlogo} />     
          <div className="d-grid gap-2">
          <button className='submitbutton' onClick={() => {
            
            var pnr = String(Date.parse(new Date()));
            var pnrRef = {pnrObj}
            var pnrSet = pnrRef.pnrObj.current;
            pnrSet(pnr);
            db.collection("payment_history").doc(pnr)
            .set({
              first_name: localStorage.getItem("first_name"),
              last_name:localStorage.getItem("last_name"),
              gender:localStorage.getItem("gender"),
              age:localStorage.getItem("age"),
              from:localStorage.getItem("from"),
              to:localStorage.getItem("to"),
              date:localStorage.getItem("date"),
              class:localStorage.getItem("class1"),
              flight:localStorage.getItem("flight"),
              email:localStorage.getItem("email"),
              mobile:localStorage.getItem("mobile")
            })
            .then(() => {
              // alert("Your information is submitted to our DB");
              storePrice(localStorage.getItem("from"), localStorage.getItem("to"), localStorage.getItem("flight"), localStorage.getItem("class1"));
              console.log("done with storage function");
              sleep(3000);
            })
            .catch((error) => {
              // alert(error.message);
              console.log(error);
            });
            var checkoutToTicket = {obj}.obj.current; checkoutToTicket('Ticket');
            }} >Check Payment of ₹{price}</button>
</div>
        </div>
    </>
  );
}
