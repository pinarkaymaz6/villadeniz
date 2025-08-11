import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; // Optional: for styling

import trFlag from '../assets/flags/tr.png';
import enFlag from '../assets/flags/en.png';
import deFlag from '../assets/flags/de.png';

// import logo from '../assets/logo.svg';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">Villa Deniz</div>
        {/* <a href="#home" className="navbar-logo">
          <img src={logo} alt="Villa Deniz Logo" />
        </a> */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home" className="nav-link" onClick={closeMenu}>
          {t('nav.home')}
        </a>
        <a href="#gallery" className="nav-link" onClick={closeMenu}>
          {t('nav.gallery')}
        </a>
        <a href="#location" className="nav-link" onClick={closeMenu}>
          {t('nav.location')}
        </a>
        <a href="#contact" className="nav-link" onClick={closeMenu}>
          {t('nav.contact')}
        </a>
      </div>
      <div className="navbar-right">
        <a href="#reservation" className="nav-link highlighted" onClick={closeMenu}>
          {t('nav.reservation')}
        </a>
        <img
          src={trFlag}
          alt="Turkish"
          className={`flag-icon ${i18n.language === 'tr' ? 'active' : ''}`}
          onClick={() => changeLanguage('tr')}
        />
        <img
          src={enFlag}
          alt="English"
          className={`flag-icon ${i18n.language === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
        />
        <img
          src={deFlag}
          alt="German"
          className={`flag-icon ${i18n.language === 'de' ? 'active' : ''}`}
          onClick={() => changeLanguage('de')}
        />
      </div>
    </nav>
  );
};

export default Navbar;
