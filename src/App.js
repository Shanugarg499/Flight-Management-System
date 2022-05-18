import { useState, useRef } from 'react';
import './App.css';
import * as rb from 'react-bootstrap';
import Home from './Home/Home';
import Book from './Book/Book';
import Status from './Status/Status';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import Register from './Register/Register';
// import ticket from './Ticket/ticket';


function App() {

  const[active, setActive] = useState('Home');
  const [type, setType] = useState("Navbar");
  const typeRef = useRef(setType);
  
  // setActive('Home')
  return (
    <>

      {type === 'Navbar' && <section className="mainview">
        <rb.Navbar bg="white" expand="md">
          <rb.Container fluid>
          <button className="NavButton mainlogo" onClick={() => setActive('Home')} > <img style={{width: 75, height: 52}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXMaOIDN4jt7wlP8bvLnUMupB7z459qW3vQ&usqp=CAU" alt='Lala Airlines' /> </button>
            <rb.Navbar.Toggle aria-controls="navbarScroll" />
            <rb.Navbar.Collapse id="navbarScroll">
              <rb.Nav navbarScroll >
                <button className="NavButton" onClick={() => {setActive('Book')}}>BOOK</button>
                <button className="NavButton" onClick={() => {setActive('Status')}}>STATUS</button>
                <button className="NavButton" onClick={() => {setActive('Contact')}}>CONTACT</button>
                <button className="NavButton" onClick={() => {setActive('Login')}}>LOGIN</button> 
                <button className="NavButton" onClick={() => {setActive('Register')}}>REGISTER</button> 
              </rb.Nav>
            </rb.Navbar.Collapse>
          </rb.Container>
        </rb.Navbar>
      </section>}

      {active === 'Home' && <Home />}
      {active === 'Book' && <Book typeObj={typeRef} />}
      {active === 'Status' && <Status />}
      {active === 'PNR' && <Pnr/>}
      {active === 'Contact' && <Contact />}
      {active === 'Login' && <Login />}
      {active === 'Register' && <Register />}
      
    </>
  );
}

export {App};
