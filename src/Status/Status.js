import '../Status/Status.css';
import { Footer } from '../Footer/Footer';
import { db } from "../utils/firebase";
import {doc, getDoc} from 'firebase/firestore';
import {useState} from 'react';


async function printTicketInfo(pnrNum) {
    try {
        console.log("inside print fun");
        var docRef = db.collection('payment_history').doc(pnrNum);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Status:", doc.data());
            } else {
                console.log("No such PNR found!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    } catch (error) {
        try {
            const docRef = doc(db, "cities", "SF");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            } else {
            console.log("No such document!");
            }
        } catch (error2) {
            console.log(error2);
        }
    }
  }

  

const Status = ({pageObj}) => {

    const [pnrNum, setPNR] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        var thatObj = {pageObj};
        var pageFun = thatObj.pageObj.current;
        localStorage.setItem("currPNR", pnrNum);
        pageFun('PNR');

        // printTicketInfo(pnrNum);
    }

    return (

<>
<form onSubmit={handleSubmit}>
    <div className = "back">
    <div className="centered">
    <div>
    <label for="pnr"><b>PNR NO.</b></label><br />
        <input type="text"  className="up" placeholder="Enter PNR No." name="pnrNum" 
                value={pnrNum} 
                onChange={(e)=>
                setPNR(e.target.value) } />

    <button variant="primary" type="submit" className="submitbutton"  >Check</button>
    </div>
    </div>    
    </div>
</form>
<Footer className='footer'/>
</>

    );
};

export default Status;