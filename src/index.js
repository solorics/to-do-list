import pix1 from './assets/pix1.jpeg';
import './style.css';

const title = document.createElement('h3');
title.textContent = 'webpack installation';

const page = document.querySelector('body');
page.appendChild(title);

const img = new Image();
img.src = pix1;
page.appendChild(img);