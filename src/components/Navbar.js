import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; // Optional: for styling

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.target.value);
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
        <a href="#reservation" className="nav-link reservation-highlight">
          {t('nav.reservation')}
        </a>
      </div>

      <div className="navbar-right">
        <select onChange={changeLanguage} defaultValue={i18n.language} className="language-select">
          <option value="tr">TR</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
