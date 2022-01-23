import '../Book/Book.css';
import React, { useState, useEffect } from "react";
import { Footer } from '../Footer/Footer.js';
import * as rb from 'react-bootstrap';
import firebase from '../utils/firebase';
import 'firebase/firestore';
import { db } from "../utils/firebase";

const getprice = (from, to, flight, standard) => {
  return "todo";
}

const Book = () => {
  const [first_name, setName1] = useState("");
  const [last_name, setName2] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [class1, setClass] = useState("");
  const [flight, setFlight] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    

    db.collection("payment_history")
      .add({
        first_name: first_name,
        last_name:last_name,
        gender:gender,
        age:age,
        from:from,
        to:to,
        date:date,
        class:class1,
        flight:flight,
        email:email,
        mobile:mobile
      })
      .then(() => {
       
        alert("Your information has been submitted👍", getprice(from, to, flight, class1));
      })
      .catch((error) => {
        alert(error.message);
     
      });

    setName1("");
    setName2("");
    setGender("");
    setAge("");
    setFrom("");
    setTo("");
    setDate("");
    setClass("");
    setFlight("");
    setEmail("");
    setMobile("");
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="formcover">
          <rb.Form className="form">
            <div class="row g-3">
              <div class="col">
                <label for="inputEmail4" class="form-label">First Name</label>
                <input 
                type="text" 
                class="form-control" 
                placeholder="First name" 
                value={first_name} 
                onChange={(e)=>
                setName1(e.target.value)
                }
                />
              </div>
              <div class="col">
                <label for="inputEmail4" class="form-label">Last Name</label>
                <input 
                type="text" 
                class="form-control" 
                placeholder="Last name"
                 value={last_name} 
                 onChange={(e)=>
                setName2(e.target.value)
                 }
                 />
              </div>
              <div class="col">
                <label for="gender" class="form-label">Gender</label>
                <select 
                class="form-control" 
                value={gender}
                onChange={(e)=>
                setGender(e.target.value)
                }
                
                >
                  <option selected>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to disclose</option>
                  
                </select>
              </div>
              <div class="col">
                <label for="inputEmail4" class="form-label">Age</label>
                <input type="integer" 
                class="form-control" 
                placeholder="age" 
                value={age} 
                onChange={(e)=>
                setAge(e.target.value)
                }
                />
              </div>
            </div>
            <div class="row g-3">
              <div class="col">
                <label for="from" class="form-label">From</label>
                <select 
                 class="form-control"
                 value={from} 
                onChange={(e)=>
                setFrom(e.target.value)
                }
                 >
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
                <select 
                class="form-control"
                value={to} 
                onChange={(e)=>
                setTo(e.target.value)
                }
                >
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
                <input 
                type="date"
                 class="form-control" 
                 placeholder="date" 
                 value={date} 
                onChange={(e)=>
                setDate(e.target.value)
                }
                 />
              </div>
              <div class="col-sm">
                <label for="class" class="form-label">Class</label>
                <select
                class="form-control"
                value={class1} 
                onChange={(e)=>
                setClass(e.target.value)
                }
                >
                  <option selected>Choose...</option>
                  <option>Economy</option>
                  <option>Premium Economy</option>
                  <option>Business</option>
                </select>
              </div>
              <div class="col-sm">
                <label for="flight" class="form-label">Flight Name</label>
                <select 
                class="form-control"
                value={flight} 
                onChange={(e)=>
                setFlight(e.target.value)
                }
                >
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
                <input
                 type="email"
                  class="form-control"
                   placeholder="email"
                   value={email} 
                onChange={(e)=>
                setEmail(e.target.value)
                }
                    />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Mobile No.</label>
                <input 
                type="mobile" 
                class="form-control"
                  placeholder="mobile no."
                  value={mobile} 
                onChange={(e)=>
                setMobile(e.target.value)
                }
                   />
              </div>
            </div>
          </rb.Form>
        </div>
        {/* onClick={() => bookseat(passenger, transaction)} */}
        <rb.Button variant="primary" type="submit" className='submitbutton'>
          Submit
        </rb.Button>
      </form>

      <Footer />
    </>


  );




};


export default Book;





