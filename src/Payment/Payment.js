import React from 'react'
import "../Payment/Payment.css";
import paymentlogo from '../Images/payment.jpg';
import * as rb from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Ticket from '../Ticket/ticket';


export default function Payment({obj}) {
  
    

  return (
    <>
      <div className='qwer'>
      <rb.Button variant="primary" onClick={() => {var backfunction = {obj}.obj.current; backfunction('notBooked');}}>
          <KeyboardBackspaceIcon />
        </rb.Button>
              <h1 className='adj'>Payment Gateway</h1>
          <img className='middle' src={paymentlogo} />     
          <div className="d-grid gap-2">
          <button className='block' onClick={() => {var checkoutToTicket = {obj}.obj.current; checkoutToTicket('Ticket');}} >Pay Now</button>
</div>
        </div>
    </>
  );
}
