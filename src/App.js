import React from 'react';
import Navbar from './components/navbar';
import SectionTwo from './components/sectionTwo';
import SectionThree from './components/sectionThree';
import SectionFour from './components/sectionFour'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
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
    </>
  );
}

export default App;