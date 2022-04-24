import React from 'react';
import './ticket.css';
import {doc} from 'firebase/firestore';
import * as rb from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import PrintIcon from '@mui/icons-material/Print';

function Ticket({togObj, navbarObj, pnrNum}) {
  var typeObj = {navbarObj};
  var navbarHandler = typeObj.navbarObj.current;
  navbarHandler('Navbar');
 
  var f_name =localStorage.getItem("first_name");
  var l_name =localStorage.getItem("last_name");
  var gender =localStorage.getItem("gender");
  var age =localStorage.getItem("age");
  var class1 =localStorage.getItem("class1");
  var seat = ((pnrNum%100000)/1000+1);
  var price = localStorage.getItem("price");
  var from =localStorage.getItem("from");
  var to=localStorage.getItem("to");
  var date =localStorage.getItem("date");
  return (
      <>
    <div>
    
  
        <div className="ticket">
       
            <div className="ticket__content">
           
            <p className='green_color'><b>Ticket Confirmed</b></p>
            <p className='check'>
        <p className='shift1'><b>{from}  <DoubleArrowIcon/>      {to}</b></p>
        <p className='shift1'><b>PNR:</b> {pnrNum}</p>

       <p><b>PASSENGER NAME:</b> {f_name} {l_name} , {age} , {gender} </p>
       <p><b>DATE OF JOURNEY:</b> {date}</p>
     
      <p><b>SEAT:</b> F-{seat} , {class1}</p>
      <p><b>PRICE:</b> {price}</p>

    </p>

              
            </div>
        </div>
 
    </div>
  </>
  
  );
  }

export default Ticket;
