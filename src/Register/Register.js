import React, { useState, useEffect } from "react";
import * as rb from 'react-bootstrap';
import './Register.css';
import { Footer } from '../Footer/Footer';
import { db } from "../utils/firebase";





function Register() {
  
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      db.collection("user_register")
        .add({
          name: name,
          password:password,
          cpassword:cpassword,
          email:email,
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
                 type="email"
                  class="form-control"
                   placeholder="email"
                   value={email} 
                onChange={(e)=>
                setEmail(e.target.value)
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
