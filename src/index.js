import './css/style.css';

// import confetti from 'canvas-confetti';

import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';
import intersect from '@alpinejs/intersect';
import { allSubjects } from './data';

window.Alpine = Alpine;
Alpine.plugin(persist);
Alpine.plugin(intersect);

Alpine.data('allSubjects', () => {
  return {
    items: { ...allSubjects },
  };
});
Alpine.store('showResultCard', {
  on: false,

  toggle() {
    this.on = !this.on;
  },
});

Alpine.store('avatar', {
  webp: 'avatar.webp',
  //   webp: './img/avatar.webp',
  png: 'avatar.png',
  //   png: './img/avatar.png',
});

Alpine.store('showSideBar', false);

Alpine.start();
// Import Packages

// const navBar = document.querySelector('.navbar');
// const navBar = document.querySelector('header');
// const observer = new IntersectionObserver(
//   ([e]) => e.target.classList.toggle('active', e.intersectionRatio < 1),
//   { threshold: [1] }
// );
// body > header.active
// observer.observe(navBar);
/*
const temp = false;
if (temp) {
  const end = Date.now() + 15 * 1000;
  const colors = ['#ff0000', '#ffff00'];
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
*/
