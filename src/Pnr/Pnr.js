import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import {db} from '../utils/firebase';
import {useState} from 'react';

async function LoadData() {
    const snapShot = await db.collection("payment_history").get();
    try {
        snapShot.docs.forEach(doc => {
          if(doc.id == localStorage.getItem("currPNR")) {
            localStorage.setItem("datareceived", doc.data());
            }
        })
      } catch (error) {
          localStorage.setItem("datareceived", "No information found for this PNR Number");
      }
}

export default async function Pnr() {
  
  const[toshow, setShow] = useState('no');
  LoadData();
  var info = `<div>status of PNR: ${localStorage.getItem("currPNR")} is:<br/><br/>${localStorage.getItem("datareceived")};</div>`;
  return (
    <>
    <button onClick={() => {setShow('yes')}}>SHOW</button>
    {info}
    </>
  )
}
