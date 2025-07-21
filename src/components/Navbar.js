import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; // Optional: for styling

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home" className="nav-link">
          {t('nav.home')}
        </a>
        <a href="#gallery" className="nav-link">
          {t('nav.gallery')}
        </a>
        <a href="#location" className="nav-link">
          {t('nav.location')}
        </a>
        <a href="#contact" className="nav-link">
          {t('nav.contact')}
        </a>
      </div>

      <div className="navbar-right">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('tr')}>TR</button>
        <button onClick={() => changeLanguage('de')}>DE</button>
      </div>
    </nav>
  );
};

export default Navbar;
