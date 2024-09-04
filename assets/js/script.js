function switchLanguage() {
  const language = document.getElementById('languageSwitcher').value;

  if (language === 'en') {
    document.getElementById('banner-title').innerText = 'Villa Deniz';
    document.getElementById('banner-subtitle').innerText = 'Your Vacation Home';
    document.getElementById('banner-location').innerText = 'Manavgat, Antalya, Türkiye';

    document.getElementById('about-title').innerText = 'About';
    document.getElementById('about-card-1').innerText = 'Dublex villa with 2 bedrooms, up to 5 guests.';
    document.getElementById('about-card-2').innerText = 'Fully furnished. AC and WiFi is available.';
    document.getElementById('about-card-3').innerText =
      'Next to grocery stores and shopping centres, 300 meters to the beach, kids friendly neighbourhood.';

    document.getElementById('photos-title').innerText = 'Photos';

    document.getElementById('location-title').innerText = 'Location';

    document.getElementById('contact-title').innerText = 'Contact';
    document.getElementById('contact-info-1').innerText = 'John Doe: +90 332 124 2332 (Turkish)';
    document.getElementById('contact-info-2').innerText = 'Jane Doe: +49 4344 0543555 (English and German)';
  } else if (language === 'de') {
    document.getElementById('banner-title').innerText = 'Villa Deniz';
    document.getElementById('banner-subtitle').innerText = 'Ihr Ferienhaus';
    document.getElementById('banner-location').innerText = 'Manavgat, Antalya, Türkei';

    document.getElementById('about-title').innerText = 'Über uns';
    document.getElementById('about-card-1').innerText = 'Doppelhaushälfte mit 2 Schlafzimmern, für bis zu 5 Gäste.';
    document.getElementById('about-card-2').innerText = 'Voll möbliert. Klimaanlage und WLAN verfügbar.';
    document.getElementById('about-card-3').innerText =
      'In der Nähe von Lebensmittelgeschäften und Einkaufszentren, 300 Meter zum Strand, kinderfreundliche Nachbarschaft.';

    document.getElementById('photos-title').innerText = 'Fotos';

    document.getElementById('location-title').innerText = 'Lage';

    document.getElementById('contact-title').innerText = 'Kontakt';
    document.getElementById('contact-info-1').innerText = 'John Doe: +90 332 124 2332 (Türkisch)';
    document.getElementById('contact-info-2').innerText = 'Jane Doe: +49 4344 0543555 (Englisch und Deutsch)';
  } else if (language === 'tr') {
    document.getElementById('banner-title').innerText = 'Villa Deniz';
    document.getElementById('banner-subtitle').innerText = 'Sizin Tatil Eviniz';
    document.getElementById('banner-location').innerText = 'Manavgat, Antalya, Türkiye';

    document.getElementById('about-title').innerText = 'Hakkında';
    document.getElementById('about-card-1').innerText = '2 yatak odalı dubleks villa, 5 kişiye kadar konaklama imkanı.';
    document.getElementById('about-card-2').innerText = 'Tam donanımlı. Klima ve WiFi mevcut.';
    document.getElementById('about-card-3').innerText =
      'Marketlere ve alışveriş merkezlerine yakın, plaja 300 metre mesafede, çocuk dostu mahalle.';

    document.getElementById('photos-title').innerText = 'Fotoğraflar';

    document.getElementById('location-title').innerText = 'Konum';

    document.getElementById('contact-title').innerText = 'İletişim';
    document.getElementById('contact-info-1').innerText = 'John Doe: +90 332 124 2332 (Türkçe)';
    document.getElementById('contact-info-2').innerText = 'Jane Doe: +49 4344 0543555 (İngilizce ve Almanca)';
  }
}
