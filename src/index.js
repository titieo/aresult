'use strict';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import './css/style.css';
import 'virtual:windi-utilities.css';
// import 'virtual:windi.css';
import 'virtual:windi-devtools';

// import confetti from 'canvas-confetti';

import App from './App.svelte';

const app = new App({
  target: document.body,
});

document.querySelectorAll('a').forEach((i) => {
  if (i.getAttribute('target') === '_blank')
    i.setAttribute('rel', 'noopener noreferrer');
});

document.querySelectorAll('img').forEach((img) => {
  img.setAttribute('loading', 'lazy');
  img.onerror = function () {
    console.error(`${this.src} not found`);
    this.src = 'cat.png';
    this.srcset = 'cat.png 640w,cat@2x.png 1920w, cat@3x.png 2400w';
    this.onerror = null;
  };
});

export default app;
