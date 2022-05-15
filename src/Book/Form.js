import React, { useState, useEffect } from "react";
import { Footer } from '../Footer/Footer.js';
import {sleep} from '../utils/funs';
import * as rb from 'react-bootstrap';
import './form.css';

var isSpaceInName = (name)=>
{
  for(var i=0;name[i]!='\0';i++)
  {
    if(name[i]== ' ') return true;
  }
  return false;
}


var isinvalidevent = (first_name, gender, age, from, to, date , class1, flight, email, mobile) => {
  if(first_name === '' || gender === '' || age === '' || from === '' || to ==='' || date === '' || class1 === '' || flight === '' || flight === '' || email === '' || mobile === '') {
    alert("Required fields can't be empty");
    return true;
  }
  if(from === to)
  {
    alert("Source and Destination are not same");
    return true;
  }
  if(flight !="JetAirways") 
  {
    alert("Flights Not Available");
    return true;
  }
  // if(isSpaceInName(first_name))
  // {
  //   alert("Don't Use Spaces In Name")
  //   return true;
  // }

}


export default function Form({togObj, navbarObj}) { 
  // console.log(params[1]);
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

      if(localStorage.getItem("Userallowed") == "false") {
        alert("You can't book a ticket until you log in.");
        return;
      }

      console.log("validating event");
  
      if(isinvalidevent(first_name, gender, age, from, to, date , class1, flight, email, mobile)) {
        return;
      }
      
      localStorage.setItem("first_name", first_name);
      localStorage.setItem("last_name", last_name);
      localStorage.setItem("age", age);
      localStorage.setItem("gender", gender);
      localStorage.setItem("from", from);
      localStorage.setItem("to", to);
      localStorage.setItem("date", date);
      localStorage.setItem("class1", class1);
      localStorage.setItem("flight", flight);
      localStorage.setItem("email", email);
      localStorage.setItem("mobile", mobile);
        
        var typeRef = {navbarObj};
        // console.log(typeRef.obj);
        try {
          var toggleNavbar = typeRef.navbarObj.current;
        } catch (ex) {
          console.log(ex);
        }
        toggleNavbar('notNavbar');
        var r = {togObj}
        var togglefunction = r.togObj.current;
        togglefunction('QRcode');
    };
  
    return <>
      <form className="background1" onSubmit={handleSubmit}>
        <div className="formcover">
          <rb.Form className="form">
            <div class="row g-3">
              <div class="col">
                <label for="inputEmail4" class="form-label">First Name <b className="redMark">*</b></label>
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
                <label for="gender" class="form-label">Gender <b className="redMark">*</b></label>
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
                <label for="inputEmail4" class="form-label">Age <b className="redMark">*</b></label>
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
                <label for="from" class="form-label">From <b className="redMark">*</b></label>
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
                <label for="to" class="form-label">To <b className="redMark">*</b></label>
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
                <label for="inputEmail4" class="form-label">Date Of Journey <b className="redMark">*</b></label>
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
                <label for="class" class="form-label">Class <b className="redMark">*</b></label>
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
                <label for="flight" class="form-label">Flight Name <b className="redMark">*</b></label>
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
                  <option>JetAirways</option>
                </select>
              </div>
            </div>
            <div class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email <b className="redMark">*</b></label>
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
                <label for="inputEmail4" class="form-label">Mobile No. <b className="redMark">*</b></label>
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
        <button variant="primary" type="submit" className="submitbutton" >Book Now</button>
      </form>
    </>
}
