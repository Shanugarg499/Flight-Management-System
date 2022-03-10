import React, { useState, useEffect } from "react";
import * as rb from 'react-bootstrap';
import './Register.css';
import { Footer } from '../Footer/Footer';
import { db } from "../utils/firebase";

var isinvalidevent = async (name, pass, cpass, username) => {
  if(name === "" || pass === "" || cpass === "" || username === "") {
    alert("Empty field not allowed. Please try again.");
    return;
  }
  if(typeof(pass) === 'string' && pass.length < 6) {
    alert("Password length must be greater than 5");
    return;
  }
  if(pass !== cpass) {
    alert("Passwords not matching in both fields. Try again please.");
    return;
  }
  try{
    const snapShot = await db.collection("user_register").get();
    snapShot.docs.forEach(doc => {
      if(doc.data()["username"] === username) {
        alert("Sorry This username is already taken. Try another.");
        return;
      }
    })
  } catch (err) {
    alert("Error connecting with DB. Please try again later.");
  }
}

function Register() {
  
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if(isinvalidevent(name, password, cpassword, username)) {
        return;
      }
      db.collection("user_register")
        .add({
          name: name,
          password:password,
          username:username,
          mobile:mobile
        })
        .then(() => {
          alert("Thanks For Registring");
   
        })
        .catch((error) => {
          alert(error.message);
       
        });
  
      
    };
  
    return <>
      <form onSubmit={handleSubmit}>
        <div className="formcover">
          <rb.Form className="form">
            <div class="row g-6">
              <div class="col md-6">
                <label for="inputEmail4" class="form-label">Name</label>
                <input 
                type="text" 
                class="form-control" 
                placeholder="name" 
                value={name} 
                onChange={(e)=>
                setName(e.target.value)
                }
                />
              </div>
              <div class="col md-6">
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
            <div class="row">
            </div>
              <div class="col">
                <label for="inputEmail4" class="form-label">Email</label>
                <input
                 type="username"
                  class="form-control"
                   placeholder="username"
                   value={username} 
                onChange={(e)=>
                setUsername(e.target.value)
                }
                    />
              </div>
              <div class="col">
                <label for="inputEmail4" class="form-label">Password</label>
                <input 
                type="password" 
                class="form-control"
                  placeholder="password"
                  value={password} 
                onChange={(e)=>
                setPassword(e.target.value)
                }
                   />
              </div>
              <div class="col">
                <label for="inputEmail4" class="form-label">Confirm Password</label>
                <input 
                type="password" 
                class="form-control"
                  placeholder="confirm password"
                  value={cpassword} 
                onChange={(e)=>
                setCpassword(e.target.value)
                }
                   />

            </div>
          </rb.Form>
        </div>
        {/* onClick={() => bookseat(passenger, transaction)} */}
        <rb.Button variant="primary" type="submit" className='submitbutton'>
          Register
        </rb.Button>
      </form>
    </>
}

export default Register;
