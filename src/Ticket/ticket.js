import React from 'react';
import './ticket.css';
import * as rb from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Ticket({togObj, navbarObj}) {
  var typeObj = {navbarObj};
  var navbarHandler = typeObj.navbarObj.current;
  navbarHandler('Navbar');
  return (
      <>
    <div>
        <div className="ticket">
            <div className="ticket__content">
                <p className="ticket__text">Lala Airlines</p>
            </div>
        </div>
    </div>;
  </>
  
  );
  }

export default Ticket;
