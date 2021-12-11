import '../Book/Book.css';
import {Footer} from '../Footer/Footer.js';
import * as rb from 'react-bootstrap';
import firebase from '../utils/firebase';
import 'firebase/firestore';

const bookseat = (passenger_details, transaction_details) => {
    
    const db = firebase.firestore();
    // add transaction to user_history
    try{
      db.collection('payment_history').doc(passenger_details.user_id).set({[transaction_details.transaction_id]: transaction_details});
    // update seat_map
    for(var seatno in passenger_details.seats) {
      db.collection([passenger_details.seats.seatno.airways])
      .doc([passenger_details.seats.seatno.flight_date + passenger_details.seats.seatno.flight_id + passenger_details.seats.seatno.type])
      .set({[passenger_details.seats.seatno.seat_num]: passenger_details.user_id})
    }
    } catch(e) {
      console.log("Hey there! There's error: "+e )
    } 
  }

const Book = () => {

  const passenger = {
    name: 'Shanu Garg',
    user_id: 'Shanu_garg11112021184529',
    total_seats: '4',
    seats: {
      1: {
        airways: 'Jet',
        flight_id: 'random_flight_id',
        flight_date: '21122021',
        type: 'B',
        seat_num: '47a'
      },
      2: {
        airways: 'Jet',
        flight_id: 'random_flight_id',
        flight_date: '21122021',
        type: 'B',
        seat_num: '47b'
      },
      3: {
        airways: 'Jet',
        flight_id: 'random_flight_id',
        flight_date: '21122021',
        type: 'B',
        seat_num: '47c'
      },
      4: {
        airways: 'Jet',
        flight_id: 'random_flight_id',
        flight_date: '21122021',
        type: 'B',
        seat_num: '46a'
      } 
    }
  }
  const transaction = {
    user_id: 'Shanu_garg11112021184529',
    amount: '100000',
    transaction_id: '123456789',
    method: 'credit card',
    date: '11112021',
    time: '181523'
  }
    
    return <>
    <img className = 'Bookimg' src='https://static.goindigo.in/content/dam/indigov2/6e-website/aboutus/flight-booking/TicketBooking-Page-Banner.jpg' alt='image loading...'></img>

    <rb.Button variant="primary" type="submit" className='submitbutton' onClick={() => bookseat(passenger, transaction)}>
        Test-ping-to-server
    </rb.Button>
    <Footer />
    </>
};

export default Book;