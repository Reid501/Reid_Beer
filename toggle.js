toggle = document.querySelector('.hamburger');
nav = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        toggle.src = 'images/icon-hamburger.svg';
    } else {
        nav.style.display = 'block';
        toggle.src = 'images/icon-close.svg';
    }
})