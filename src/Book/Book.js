import '../Book/Book.css';
import React, { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import * as rb from 'react-bootstrap';
import firebase from '../utils/firebase';
import 'firebase/firestore';
import Form from './Form';
import Ticket from '../Ticket/ticket';
import {Footer} from '../Footer/Footer';


const Book = () => {
  const [active, setActive] = useState("notBooked");
  return (
    <>
      <rb.Button variant="primary" onClick={() => {if(active == 'notBooked') {setActive('Booked');} else {setActive('notBooked');}}} className='submitbutton'>
          Toggle
        </rb.Button>
      {active == "notBooked" && <Form />}
      {active == "Booked" && <Ticket />}
      <Footer />
    </>
  );
  
};


export default Book;





