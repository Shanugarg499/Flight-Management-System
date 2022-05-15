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
            localStorage.setItem("cuser", username);
            return;
        } 
    });

}

const Login = () => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    
    const handleSubmit = (e) => {
        try{
          e.preventDefault();
          setTimeout(validateuser(username, password), 3000);
          // validateuser(username, password);
          if(localStorage.getItem("cuser") == username) {
              alert("You have entered successfully");
              localStorage.setItem("Userallowed", true);
              localStorage.setItem("flag", 0);
          } else {
            alert("user checked successfully. Press Login button again to enter. If you're unable to enter then you entered wrong credentials.");
          }
        } catch (err) {
          alert("Error with DB. Please try later.");
        }
    }

    return (
        <>
        <form className="background2" onSubmit={handleSubmit}>
        <div className="formcover">
          <rb.Form className="form">
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
              
          </rb.Form>
        </div>
        <button variant="primary" type="submit" className="submitbutton" >Login</button>
      </form>
      <Footer />
        </>
    );
};

export default Login;
