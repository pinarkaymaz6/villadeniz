import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-section" id="contact">
      <h2>{t('contact.title')}</h2>
      <div className="contact-details">
        <p>{t('contact.name')}</p>
        <p>{t('contact.phone')}</p>
        <p>{t('contact.email')}</p>
      </div>
    </div>
  );
};

export default Contact;
