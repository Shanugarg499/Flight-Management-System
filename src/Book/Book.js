import '../Book/Book.css';
import React, { useState, useEffect, useRef } from "react";
import { db } from "../utils/firebase";
import firebase from '../utils/firebase';
import 'firebase/firestore';
import Form from './Form';
import Ticket from '../Ticket/ticket';
import {Footer} from '../Footer/Footer';
import Payment from '../Payment/Payment';
import { DataObject } from '@mui/icons-material';


const Book = ({ typeObj }) => {
  const [active, setActive] = useState("form");
  console.log("typeObj here: ", typeObj);
  console.log("");
  console.log("");
  console.log("");
  const togRef = useRef(setActive);
  return (
    <>
      {active == "form" && <Form togObj={togRef} navbarObj={typeObj} />}
      {active == "QRcode" && <Payment obj={togRef}/>}
      {active == "Ticket" && <Ticket togObj={togRef} navbarObj={typeObj} />}
   
      <Footer />
    </>
  );
  
};


export default Book;





