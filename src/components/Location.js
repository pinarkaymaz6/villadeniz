import React from 'react';
import './Location.css';
import { useTranslation } from 'react-i18next';

const Location = () => {
  const { t } = useTranslation();

  return (
    <div className="location-section" id="location">
      <h2>{t('nav.location')}</h2>
      <p className="location-description">Villa Deniz, Antalya, Turkey</p>
      <div className="map-container">
        <iframe
          title="Villa Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408439.4229171246!2d30.639999169751462!3d36.89195126218241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c35f55a1a7abef%3A0x8f009492efecbc85!2sY%C4%B1lmazlar%20Tatil%20Sitesi!5e0!3m2!1sen!2sde!4v1725310310958!5m2!1sen!2sde"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
