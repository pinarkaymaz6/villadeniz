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
        name: 'Owner: John Doe',
        phone: 'Phone: +90 555 555 5555',
        email: 'Email: johndoe@example.com',
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
        name: 'Sahibi: John Doe',
        phone: 'Telefon: +90 555 555 5555',
        email: 'E-posta: johndoe@example.com',
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
        name: 'Besitzer: John Doe',
        phone: 'Telefon: +90 555 555 5555',
        email: 'E-Mail: johndoe@example.com',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
