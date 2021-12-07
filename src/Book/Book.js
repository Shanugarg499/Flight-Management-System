import '../Book/Book.css';
import {Footer} from '../Footer/Footer.js';
import * as rb from 'react-bootstrap';
import firebase from '../utils/firebase';

const Test_ping = () => {
    const db = firebase.database().ref('ping_tests/');
    const date = new Date();
    const en = {
      date: new Date().toLocaleDateString(),
      time: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),
      test: true
    };
    db.push(en);
    alert('function invoked successfully');
  }

const Book = () => {
    return <>
    <img className = 'Bookimg' src='https://static.goindigo.in/content/dam/indigov2/6e-website/aboutus/flight-booking/TicketBooking-Page-Banner.jpg' alt='image loading...'></img>

    <rb.Button variant="primary" type="submit" className='submitbutton' onClick={() => Test_ping()}>
        Test-ping-to-server
    </rb.Button>
    <Footer />
    </>
};

export default Book;