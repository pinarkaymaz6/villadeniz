import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Location from './components/Location';

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
        <div className="airbnb-section">
          <h2>Book on Airbnb</h2>
          <p>You can reserve your stay at Villa Deniz via Airbnb.</p>

          {/* Replace with your actual Airbnb listing URL */}
          <a
            href="https://www.airbnb.com/rooms/1339250038918906083?guests=1&adults=1&s=67&unique_share_id=4d511ffd-1034-42b7-9e91-3b7ed6c6a5e7"
            target="_blank"
            rel="noopener noreferrer"
            className="airbnb-button"
          >
            View Listing
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
