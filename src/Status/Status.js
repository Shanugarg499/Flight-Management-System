import '../Status/Status.css';
import { Footer } from '../Footer/Footer';
import { db } from "../utils/firebase";
import {doc} from 'firebase/firestore';
import {useState} from 'react';


async function printTicketInfo(pnrNum) {
    try {
        console.log("inside print fun");
        const docRef = doc(db, 'payment_history', {pnrNum});
        if (docRef.exists())
            console.log(docRef.data());
        else
            console.log("Status couldn't be found");
    } catch (error) {
        console.log(error);
    }
  }

const Status = () => {

    const [pnrNum, setPNR] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('inside submit fun');
        printTicketInfo(pnrNum);
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