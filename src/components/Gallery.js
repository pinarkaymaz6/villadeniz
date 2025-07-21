import React from 'react';
import './Gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const galleryImages = require.context('../assets/gallery', true);
const imageList = galleryImages.keys().map((image) => galleryImages(image));

const Gallery = () => {
  const { t } = useTranslation();

  const images = imageList;

  return (
    <div className="gallery-section" id="gallery">
      <h2>{t('nav.gallery')}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="gallery-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
