import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Location from './components/Location';
import Reservation from './components/Reservation';

import './App.css'; // Optional

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="location">
        <Location />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="reservation">
        <Reservation />
      </section>
    </>
  );
}

export default App;
