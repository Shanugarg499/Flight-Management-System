import '../Book/Book.css';
import {Footer} from '../Footer/Footer.js';
import * as rb from 'react-bootstrap';
import firebase from '../utils/firebase';
import 'firebase/firestore';

const bookseat = (passenger_details, transaction_details) => {
    
    try{
    
      const db = firebase.firestore();  
      db.collection('payment_history').doc(passenger_details.user_id).set({[transaction_details.transaction_id]: transaction_details});
      
      const data = {}
      for(var i=0; i<passenger_details.seats.length; i++)
        data[passenger_details.seats[i].seat_num] = passenger_details.user_id
      db.collection(passenger_details.airways)
        .doc(passenger_details.flight_date + passenger_details.flight_id)
        .set(data)
    
      } catch(e) {
      
      console.log("Hey there! There's error: "+e )
    } 
  }

const Book = () => {

  const passenger = {
    name: 'Shanu Garg',
    user_id: 'Shanu_garg11112021184529',
    airways: 'Jet',
    flight_date: '21122021',
    flight_id: 'random_flight_id',
    seats: [
      {
        type: 'B',
        seat_num: '47a'
      },
      {
        type: 'B',
        seat_num: '47b'
      },
      {
        type: 'B',
        seat_num: '47c'
      },
      {
        type: 'B',
        seat_num: '46a'
      } 
    ]
  }
  const transaction = {
    user_id: 'Shanu_garg11112021184529',
    amount: '100000',
    transaction_id: 'transaction_id',
    method: 'credit card',
    date: '11112021',
    time: '181523'
  }
    
    return <>
    <img className = 'Bookimg' src='https://static.goindigo.in/content/dam/indigov2/6e-website/aboutus/flight-booking/TicketBooking-Page-Banner.jpg' alt='image loading...'></img>

    <rb.Button variant="primary" type="submit" className='submitbutton' onClick={() => bookseat(passenger, transaction)}>
        Book a pseudo flight to server
    </rb.Button>
    <Footer />
    </>
};

export default Book;