import React from 'react';
import * as rb from 'react-bootstrap';
import './Register.css';
import { Footer } from '../Footer/Footer';

function Register() {
  
  return <div>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="formcover">
            <rb.Form className="form">
            <rb.Form.Group className="mb-3" controlId="formBasicEmail">
                <rb.Form.Label>Email address</rb.Form.Label>
                <rb.Form.Control type="email" placeholder="Enter email" />
                <rb.Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </rb.Form.Text>
            </rb.Form.Group>

            <rb.Form.Group className="mb-3" controlId="formBasicPassword">
                <rb.Form.Label>Password</rb.Form.Label>
                <rb.Form.Control type="password" placeholder="Password" />
            </rb.Form.Group>
            
            <rb.Form.Group className="mb-3" controlId="formBasicPassword">
                <rb.Form.Label>Confirm Password</rb.Form.Label>
                <rb.Form.Control type="password" placeholder="Confirm Password" />
            </rb.Form.Group>

            <rb.Button variant="primary" type="submit">
                Create Account
            </rb.Button>
            <br />
            <br />
            <br />
            </rb.Form>
            </div>
      {/* </form> */}
            <Footer className='footer'/>
  </div>;
}

export default Register;
