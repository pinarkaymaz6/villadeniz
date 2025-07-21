import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        gallery: 'Gallery',
        location: 'Location',
        contact: 'Contact',
      },
      banner: {
        title: 'Villa Deniz',
        subtitle: 'Your Vacation Home',
        location: 'Antalya, Turkey',
      },
      about: {
        heading: 'About the Rental',
        card1: 'Dublex villa with 2 bedrooms, up to 6 guests.',
        card2: 'Fully equipped kitchen, air conditioning and free WiFi is available.',
        card3: 'Next to grocery stores and shopping centres, 400 meters to the beach, kids friendly neighbourhood.',
      },
      contact: {
        title: 'Contact',
        name: 'Owner: Nevzat Kaymaz',
        phone: 'Phone: +90 532 592 00 77',
        email: 'Email: info@villadeniz.net',
      },
    },
  },
  tr: {
    translation: {
      nav: {
        home: 'Ana Sayfa',
        gallery: 'Galeri',
        location: 'Konum',
        contact: 'İletişim',
      },
      banner: {
        title: 'Villa Deniz',
        subtitle: 'Tatil Eviniz',
        location: 'Antalya, Türkiye',
      },
      about: {
        heading: 'Deniz Villa Hakkında',
        card1: '2 yatak odalı deniz manzarali dubleks villa, 6 kişiye kadar konaklama imkanı',
        card2: 'Tam donanımlı mutfak. Ücretsiz WiFi ve tüm odalarda klima bulunmaktadır.',
        card3: 'Marketlere ve alışveriş merkezlerine yakın, plaja 400 metre mesafede, çocuk dostu mahalle.',
      },
      contact: {
        title: 'İletişim',
        name: 'Sahibi: Nevzat Kaymaz',
        phone: 'Telefon: +90 532 592 00 77',
        email: 'E-posta: info@villadeniz.net',
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        gallery: 'Galerie',
        location: 'Lage',
        contact: 'Kontakt',
      },
      banner: {
        title: 'Villa Deniz',
        subtitle: 'Ihr Ferienhaus',
        location: 'Antalya, Türkei',
      },
      about: {
        heading: 'Über die Unterkunft',
        card1: 'Doppelhaushälfte mit 2 Schlafzimmern, für bis zu 6 Gäste.',
        card2: 'Voll ausgestattete Küche, Klimaanlage und kostenloses WLAN stehen zur Verfügung',
        card3:
          'In der Nähe von Lebensmittelgeschäften und Einkaufszentren, 400 Meter zum Strand, kinderfreundliche Nachbarschaft.',
      },
      contact: {
        title: 'Kontakt',
        name: 'Besitzer: Nevzat Kaymaz',
        phone: 'Telefon: +90 532 592 00 77',
        email: 'E-Mail: info@villadeniz.net',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
