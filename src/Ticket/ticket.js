import React from 'react';
import './ticket.css';
import {doc} from 'firebase/firestore';
import * as rb from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


function Ticket({togObj, navbarObj, pnrNum}) {
  var typeObj = {navbarObj};
  var navbarHandler = typeObj.navbarObj.current;
  navbarHandler('Navbar');
  console.log(localStorage.getItem("first_name"));
  return (
      <>
    <div>
        <div className="ticket">
            <div className="ticket__content">
                <p><b>PNR Number:</b> {pnrNum}</p>
                <p className="ticket__text">Lala Airlines</p>
            </div>
        </div>
    </div>;
  </>
  
  );
  }

export default Ticket;
