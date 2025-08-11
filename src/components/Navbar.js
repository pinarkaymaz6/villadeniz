import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; // Optional: for styling

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.target.value);
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">Villa Deniz</div>
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
        <a href="#reservation" className="nav-link highlighted" onClick={closeMenu}>
          {t('nav.reservation')}
        </a>

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
