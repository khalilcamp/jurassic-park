
import React, { useRef } from 'react';
import Navbar from './components/navbar';
import SectionTwo from './components/sectionTwo';
import SectionThree from './components/sectionThree';
import SectionFour from './components/sectionFour';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import emailjs from '@emailjs/browser';


function App() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
      .sendForm('service_lsnges4', 'template_uxbam9d', form.current, {
        publicKey: 'pfeXxWtN-GBaGmOv9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact/>
        </Routes>
        <Routes>
        <Route path="/" element={<SectionTwo />} /> {/* Render SectionTwo at root path */}
      </Routes>
        <Routes>
        <Route path="/" element={<SectionThree />} />
        </Routes>
        <Routes>
        <Route exact path='/' element={<SectionFour />} />
        </Routes>
      </Router>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </>
  );
}

export default App;