import React, { useState, useEffect } from "react";
import * as rb from 'react-bootstrap';
import './Login.css';
import { db } from "../utils/firebase";
import {Footer} from '../Footer/Footer';

async function validateuser(username, pass) {
    var map = {};
    const snapShot = await db.collection("user_register").get();
    snapShot.docs.forEach(doc => {
        if(doc.data()["username"] === username && doc.data()['password'] === pass) {
            var cookie = document.cookie;
            document.cookie = cookie + username+"T";
            return;
        }
    });

}

const Login = () => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        validateuser();
        var cookie = document.cookie;
        if(cookie.indexOf(username+'T') !== -1) {
            alert("You have logged in successfully");
        } else {
            alert("Invalid creds"+username+password);
            console.log(username);
            console.log(password);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="formcover">
          <rb.Form className="form">
            <div class="row">
            </div>
              <div class="col">
                <label for="inputEmail4" class="form-label">Username</label>
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
                  placeholder="password of length atleast 6"
                  value={password} 
                onChange={(e)=>
                setPassword(e.target.value)
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
    );
};

export default Login;
