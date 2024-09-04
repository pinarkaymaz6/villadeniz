function switchLanguage() {
  const lang = document.getElementById('languageSwitcher').value;

  fetch(`lang/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('banner-title').innerText = data.bannerTitle;
      document.getElementById('banner-subtitle').innerText = data.bannerSubtitle;
      document.getElementById('banner-location').innerText = data.bannerLocation;

      document.getElementById('about-title').innerText = data.aboutTitle;
      document.getElementById('about-card-1').innerText = data.aboutCard1;
      document.getElementById('about-card-2').innerText = data.aboutCard2;
      document.getElementById('about-card-3').innerText = data.aboutCard3;

      document.getElementById('photos-title').innerText = data.photosTitle;

      document.getElementById('location-title').innerText = data.locationTitle;

      document.getElementById('contact-title').innerText = data.contactTitle;
      document.getElementById('contact-info-1').innerText = data.contactInfo1;
      document.getElementById('contact-info-2').innerText = data.contactInfo2;
    })
    .catch((error) => console.error('Error loading language file:', error));
}
