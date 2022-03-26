import React from 'react';
import './ticket.css';
import * as rb from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Ticket({obj}) {
  return (
      <>
    <div>
    <rb.Button variant="primary" onClick={() => {var backfunction = {obj}.obj.current; backfunction('notBooked');}} className='submitbutton'>
          <KeyboardBackspaceIcon />
        </rb.Button>
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
