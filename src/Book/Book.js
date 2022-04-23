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
  const [PNR, setPNR] = useState('');
  const togRef = useRef(setActive);
  const pnrRef = useRef(setPNR);
  return (
    <>
      {active == "form" && <Form togObj={togRef} navbarObj={typeObj}  />}
      {active == "QRcode" && <Payment obj={togRef} navbarObj={typeObj} pnrObj={pnrRef}/>}
      {active == "Ticket" && <Ticket togObj={togRef} navbarObj={typeObj} pnrNum={PNR} />}
   
      <Footer />
    </>
  );
  
};


export default Book;





