import '../Book/Book.css';
import { Footer } from '../Footer/Footer.js';
import * as rb from 'react-bootstrap';
import firebase from '../utils/firebase';
import 'firebase/firestore';


const bookseat = (passenger_details, transaction_details) => {

  try {

    const db = firebase.firestore();
    db.collection("payment_history").doc(passenger_details.user_id).get()
      .then((snapShot) => {
        if (snapShot.exists) {
          db.collection('payment_history').doc(passenger_details.user_id).update({ [transaction_details.transaction_id]: transaction_details });
        }
        else {
          db.collection('payment_history').doc(passenger_details.user_id).set({ [transaction_details.transaction_id]: transaction_details });
        }
      })


    db.collection(passenger_details.airways).doc(passenger_details.flight_date + passenger_details.flight_id).get()
      .then((ourdoc) => {
        if (ourdoc.exists) {

          for (var i = 0; i < passenger_details.seats.length; i++)
            db.collection(passenger_details.airways)
              .doc(passenger_details.flight_date + passenger_details.flight_id)
              .update({ [passenger_details.seats[i].seat_num]: passenger_details.user_id })
        } else {


          for (var i = 0; i < passenger_details.seats.length; i++) {
            if (i == 0)
              db.collection(passenger_details.airways)
                .doc(passenger_details.flight_date + passenger_details.flight_id)
                .set({ [passenger_details.seats[i].seat_num]: passenger_details.user_id })

            else {
              db.collection(passenger_details.airways)
                .doc(passenger_details.flight_date + passenger_details.flight_id)
                .update({ [passenger_details.seats[i].seat_num]: passenger_details.user_id })
            }
          }
        }
      })

  } catch (e) {

    console.log("Hey there! There's error: " + e)
  }
}

function formAction() {
  const passenger = {
    name: document.getElementById("first_name").value+ " "+ document.getElementById("last_name").value,
    user_id: 'Shanu_garg11112021184529',
    airways: document.getElementById("flight").value,
    flight_date: document.getElementById("date").value,
    flight_id: 'random_flight_id',
    gender:document.getElementById("gender").value,
    age: document.getElementById("age").value,
    email:document.getElementById("email").value,
    mobile_num:document.getElementById("mobile_num").value,
    type:document.getElementById("class").value,
    seats: [
      {
     
        seat_num: '47a'

      },
      {
    
        seat_num: '47b'
      },
      {
       
        seat_num: '47c'
      },
      {
    
        seat_num: '48d'
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
bookseat(passenger,transaction);
alert("Your Flight Has Been Booked")
}

const Book = () => {
  
  return (
    <>
    <form onsubmit="return setAction(this)">
      <div className="formcover">
        <rb.Form className="form">
          <div class="row g-3">
            <div class="col">
              <label for="inputEmail4" class="form-label">First Name</label>
              <input type="text" class="form-control" placeholder="First name" id="first_name" />
            </div>
            <div class="col">
              <label for="inputEmail4" class="form-label">Last Name</label>
              <input type="text" class="form-control" placeholder="Last name" id="last_name" />
            </div>
            <div class="col">
              <label for="gender" class="form-label">Gender</label>
              <select id="gender" class="form-control">
                <option selected>Choose...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to disclose</option>
              </select>
            </div>
            <div class="col">
              <label for="inputEmail4" class="form-label">Age</label>
              <input type="integer" class="form-control" placeholder="age" id="age" />
            </div>
          </div>
          <div class="row g-3">
            <div class="col">
              <label for="from" class="form-label">From</label>
              <select id="from" class="form-control">
                <option selected>Choose...</option>
                <option>New Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Kolkata</option>
                <option>Jaipur</option>
              </select>
            </div>
            <div class="col">
              <label for="to" class="form-label">To</label>
              <select id="to" class="form-control">
                <option selected>Choose...</option>
                <option>New Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Kolkata</option>
                <option>Jaipur</option>
              </select>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-sm-7">
              <label for="inputEmail4" class="form-label">Date Of Journey</label>
              <input type="date" class="form-control" placeholder="date" id="date" />
            </div>
            <div class="col-sm">
              <label for="class" class="form-label">Class</label>
              <select id="class" class="form-control">
                <option selected>Choose...</option>
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
              </select>
            </div>
            <div class="col-sm">
              <label for="flight" class="form-label">Flight Name</label>
              <select id="flight" class="form-control">
                <option selected>Choose...</option>
                <option>SpiceJet</option>
                <option>Air Asia</option>
                <option>Go First</option>
                <option>IndiGo</option>
                <option>Air India</option>
                <option>Vistara</option>
              </select>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="email" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Mobile No.</label>
              <input type="mobile" class="form-control" id="mobile_num" placeholder="mobile no." />
            </div>
          </div>
        </rb.Form>
      </div>
      {/* onClick={() => bookseat(passenger, transaction)} */}
      <rb.Button variant="primary" type="submit" className='submitbutton'onClick={()=>formAction()}>
      Submit
      </rb.Button>
         </form>
     
      <Footer />
    </>


  );




};


export default Book;





