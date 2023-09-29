import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Course from './components/Course';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Course />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
