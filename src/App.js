import { useState } from 'react';
import './App.css';
import * as rb from 'react-bootstrap';

import Home from './Home/Home';
import Book from './Book/Book';
import Status from './Status/Status';
import Contact from './Contact/Contact';
import Login from './Login/Login';

function App() {
  const[active, setActive] = useState('Home');
  // setActive('Home')
  return (
    <>

      <section className="mainview">
        <rb.Navbar bg="white" expand="lg">
          <rb.Container fluid>
          <button className="NavButton mainlogo" onClick={() => setActive('Home')} > <img style={{width: 75, height: 52}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXMaOIDN4jt7wlP8bvLnUMupB7z459qW3vQ&usqp=CAU" alt='Lala Airlines' /> </button>
            <rb.Navbar.Toggle aria-controls="navbarScroll" />
            <rb.Navbar.Collapse id="navbarScroll">
              <rb.Nav navbarScroll >
                <button className="NavButton" onClick={() => {setActive('Book'); }}>BOOK</button>
                <button className="NavButton" onClick={() => {setActive('Status')}}>STATUS</button>
                <button className="NavButton" onClick={() => {setActive('Contact')}}>CONTACT</button>
                <button className="NavButton" onClick={() => {setActive('Login')}}>LOGIN</button> 
              </rb.Nav>
            </rb.Navbar.Collapse>
          </rb.Container>
        </rb.Navbar>
      </section>

      {active === 'Home' && <Home />}
      {active === 'Book' && <Book />}
      {active === 'Status' && <Status />}
      {active === 'Contact' && <Contact />}
      {active === 'Login' && <Login />}
      {/* <Card /> */}
        
      {/* <Footer /> */}
    </>
  );
}

export default App;
