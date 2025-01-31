(() => {
    const cookieAccept = document.getElementById('cookie-accept');

    if (localStorage.getItem('cookieConsent')) {
        document.querySelector('.cookie-consent').style.display = 'none';
    }
    
    cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'true');
        document.querySelector('.cookie-consent').style.display = 'none';
    });
})();