import { useState } from 'react';
import './App.css';

import Home from './Home/Home';
import Book from './Book/Book';
import Status from './Status/Status';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import Card from './Card/Card';
import Footer from './Footer/Footer';

function App() {
  const[active, setActive] = useState('Home');
  // setActive('Home')
  return (
    <>
      <section className="mainview">
        <button className="NavButton" onClick={() => setActive('Home')} > <img style={{width: 75, height: 52}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXMaOIDN4jt7wlP8bvLnUMupB7z459qW3vQ&usqp=CAU" /> </button>
        <button className="NavButton" onClick={() => setActive('Book')}>BOOK</button>
        <button className="NavButton" onClick={() => setActive('Status')}>STATUS</button>
        <button className="NavButton" onClick={() => setActive('Contact')}>CONTACT</button>
        <button className="NavButton" onClick={() => setActive('Login')}>LOGIN</button>
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
