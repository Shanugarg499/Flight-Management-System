import '../Book/Book.css';
import React, { useState, useEffect, useRef } from "react";
import { db } from "../utils/firebase";
import firebase from '../utils/firebase';
import 'firebase/firestore';
import Form from './Form';
import Ticket from '../Ticket/ticket';
import {Footer} from '../Footer/Footer';
import Payment from '../Payment/Payment';


const Book = () => {
  const [active, setActive] = useState("notBooked");
  
  const togRef = useRef(setActive);
  return (
    <>
      {active == "notBooked" && <Form obj={togRef} />}
      {active == "Booked" && <Payment obj={togRef}/>}
   
      <Footer />
    </>
  );
  
};


export default Book;





