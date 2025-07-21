import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const features = [t('about.card1'), t('about.card2'), t('about.card3')];

  return (
    <div className="about-section">
      {/* <h2>{t('about.heading')}</h2> */}
      <div className="card-container">
        {features.map((text, index) => (
          <div className="info-card" key={index}>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
