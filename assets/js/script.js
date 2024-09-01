document.addEventListener("DOMContentLoaded", () => {
    // Load default language
    const defaultLang = localStorage.getItem('language') || 'en';
    setLanguage(defaultLang);
});

function setLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // Update text elements
            //document.getElementById('title').textContent = data.title;
            document.getElementById('homeLink').textContent = data.homeLink;
            document.getElementById('contactLink').textContent = data.contactLink;
            
            // Check if description text exists before updating
            const descriptionText = document.getElementById('descriptionText');
            if (descriptionText) {
                descriptionText.textContent = data.descriptionText;
            }
            
            // Check if contact heading and text exist before updating
            const contactHeading = document.getElementById('contactHeading');
            const contactText = document.getElementById('contactText');
            if (contactHeading) {
                contactHeading.textContent = data.contactHeading;
            }
            if (contactText) {
                contactText.textContent = data.contactText;
            }
            
            document.getElementById('footerText').textContent = data.footerText;

            // Update flag in the dropdown button
            document.getElementById('current-flag').src = `assets/images/flags/${lang}.png`;
        })
        .catch(error => console.error('Error loading language file:', error));

    // Save selected language to local storage
    localStorage.setItem('language', lang);
}

