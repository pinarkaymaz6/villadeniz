import React, { useState } from 'react';
import './Reservation.css';
import { useTranslation } from 'react-i18next';

const reviews = [
  {
    text: 'Konum olarak gayet güzel bir yerde , halk plajına yürüyerek 6-7 dakika turizm bölgesi olmasına rağmen aşırı kalabalık değil ufak kullanışlı bir bahçesi var mangal yapmak için olanaklar mevcut. Kalabalık aileler için on numara bir mekan tavsiye ediyorum.',
    author: 'M. Furkan, Haziran 2025',
  },
  {
    text: 'Çok geniş büyük ailelerin çok rahatlıkla konaklayacağı bir ev temiz ve düzenli her türlü ihtiyacı in karlılanacağı kadar malzeme barındıran bir ev gönül rahatlığıyla tercih edebilirsiniz.',
    author: 'Abdullah, Temmuz 2025',
  },
  {
    text: '2 aile 4 yetişkin 3 çocuk rahatlıkla konakladık. Yatakları rahattı, bahçe çok keyifliydi teşekkür ederiz.',
    author: 'Gonca, Haziran 2025',
  },
];

const Reservation = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((index + 1) % reviews.length);
  };
  const prev = () => {
    setIndex((index - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reservation-section" id="reservation">
      <h2>{t('reservation.title')}</h2>
      <p>{t('reservation.description')}</p>
      <div className="reservation-container">
        <div
          class="airbnb-embed-frame"
          data-id="1339250038918906083"
          data-view="home"
          data-hide-price="true"
          loading="lazy"
          style={{ width: '100%', height: '500', margin: 'auto', border: 'none', borderRadius: '8px' }}
        >
          <a
            href="https://www.airbnb.com/rooms/1339250038918906083?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Home in Manavgat · ★4.63 · 2 bedrooms · 5 beds · 1.5 baths
          </a>
          <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script>
        </div>
      </div>
      <div className="reservation-card">
        <p>"{reviews[index].text}"</p>
        <span>– {reviews[index].author}</span>
        <div className="reservation-buttons">
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        </div>
      </div>
      <a
        href="https://www.airbnb.com/rooms/1339250038918906083?guests=1&adults=1&s=67&unique_share_id=4d511ffd-1034-42b7-9e91-3b7ed6c6a5e7"
        target="_blank"
        rel="noopener noreferrer"
        className="airbnb-button"
      >
        {t('reservation.view')}
      </a>
    </div>
  );
};

export default Reservation;
