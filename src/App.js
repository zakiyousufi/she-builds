import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Sidebar from './components/Sidebar';
import UnderDev from './components/pages/UnderDev';
import Faqs from './components/pages/FAQ';
import './App.css';

const AlertMessage = () => {
  useEffect(() => {
    if (window.innerWidth < 1100) {
      alert('Sorry, our website is currently only available on large screen devices');
    }
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<><Home /><AlertMessage /></>} />
        <Route path="/about" element={<><About /> <AlertMessage /></>} />
        <Route path="/contact" element={<><Contact /> <AlertMessage /></>} />
        <Route path="/uder-dev" element={<><UnderDev /> <AlertMessage /></>} />
        <Route path='/FAQs' element={<><Faqs /> <AlertMessage /></>} />
      </Routes>
    </Router>
  );
}

export default App;
