let iconsArray = document.querySelectorAll('.icon-social');
let h1 = document.querySelector('h1');

h1.innerHTML = 'IT WORKS'

const facebookLight = './images/icon-facebook.svg';
const facebookDark = './images/icon-facebook-dark.svg';
const instagramLight = './images/icon-instagram.svg';
const instagramDark = './images/icon-instagram-dark.svg';
const twitterLight = './images/icon-twitter.svg';
const twitterDark = './images/icon-twitter-dark.svg';
const pinterestLight = './images/icon-pinterest.svg';
const pinterestDark = './images/icon-pinterest-dark.svg';

function iconsHighlight(ev) {
  icon = ev.target;
  iconSource = icon.getAttribute('src');
  if(iconSource===facebookLight) {
    icon.setAttribute('src', facebookDark);
  } else if(iconSource===instagramLight) {
    icon.setAttribute('src', instagramDark);
  } else if(iconSource===twitterLight) {
    icon.setAttribute('src', twitterDark);
  } else if(iconSource===pinterestLight) {
    icon.setAttribute('src', pinterestDark);
  }
}

function iconsReset(ev) {
  icon = ev.target;
  iconSource = icon.getAttribute('src');
  if(iconSource===facebookDark) {
    icon.setAttribute('src', facebookLight);
  } else if(iconSource===instagramDark) {
    icon.setAttribute('src', instagramLight);
  } else if(iconSource===twitterDark) {
    icon.setAttribute('src', twitterLight);
  } else if(iconSource===pinterestDark) {
    icon.setAttribute('src', pinterestLight);
  }
}

for (let i = 0; i < iconsArray.length; i++) {
  iconsArray[i].addEventListener('mouseenter', iconsHighlight);
  iconsArray[i].addEventListener('mouseleave', iconsReset);
}