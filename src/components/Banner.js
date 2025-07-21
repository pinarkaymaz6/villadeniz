import React from 'react';
import './Banner.css';
import beachImg from '../assets/beach.jpg';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${beachImg})`,
      }}
    >
      <div className="banner-content">
        <h1>{t('banner.title')}</h1>
        <h2>{t('banner.subtitle')}</h2>
        <p>{t('banner.location')}</p>
      </div>
    </div>
  );
};

export default Banner;
