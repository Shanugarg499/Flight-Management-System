import React, { useState, useEffect } from "react";
import * as rb from 'react-bootstrap';
import './Register.css';
import { Footer } from '../Footer/Footer';
import { db } from "../utils/firebase";

async function getusers() {
  try{
    const snapShot = await db.collection("user_register").get();
    var users = [];
    snapShot.docs.forEach(doc => {
      users.push(doc.data()['username']);
    })
    document.cookie = "";
    console.log(users);
    document.cookie = users;
  } catch (err) {
    alert(err);
  }
}

var isinvalidevent = (name, pass, cpass, username, mobile) => {
  if(name === '' || pass === '' || username === '' || mobile === '') {
    alert("Fields can't be empty");
    return true;
  }
  if(pass.length < 6) {
    alert("Password length must be greater than 5");
    return true;
  }
  if(cpass != pass) {
    alert("Password confirmation is not matching. Please try again");
    return true;
  }
  return false;
}

function Register() {
  
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if(isinvalidevent(name, password, cpassword, username,mobile)) {
        return;
      }
      getusers();
      var users = document.cookie;
      if(users.indexOf(username) !== -1) {
        alert("User already registered. Please use another username");
        return;
      }
      db.collection("user_register")
        .add({
          name, password, username, mobile
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
                <label for="inputEmail4" class="form-label">Name <b className="redMark">*</b></label>
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
            <div class="row">
            </div>
              <div class="col">
                <label for="inputEmail4" class="form-label">Username <b className="redMark">*</b></label>
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
                <label for="inputEmail4" class="form-label">Password <b className="redMark">*</b></label>
                <input 
                type="password" 
                class="form-control"
                  placeholder="password of length atleast 6"
                  value={password} 
                onChange={(e)=>
                setPassword(e.target.value)
                }
                   />
              </div>
              <div class="col">
                <label for="inputEmail4" class="form-label">Confirm Password <b className="redMark">*</b></label>
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
      <Footer />
    </>
}

export default Register;
