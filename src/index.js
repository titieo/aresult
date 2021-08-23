import './css/style.css';

import confetti from 'canvas-confetti';
import '@iconscout/unicons/css/line.css';
import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';
// eslint-disable-next-line
const allSubjects = {
  math: {
    fullName: 'Toán học',
    first: [],
    second: [],
    third: [],
    calcTotal() {
      let total = 0;
      for (let i = 0; i < this.first.length; i++) {
        total += this.first.length;
      }
      for (let i = 0; i < this.second.length; i++) {
        total += this.second.length;
      }
      for (let i = 0; i < this.third.length; i++) {
        total += this.third.length;
      }
      this.total = total;
      return total;
    },
    calcAverage() {
      let division = 1;
      let average;
      division +=
        this.first.length + this.second.length * 2 + this.third.length * 3;
      // eslint-disable-next-line prefer-const
      average = this.total / division;
      this.average = average;
      return average;
    },
  },
};
// eslint-disable-next-line

window.Alpine = Alpine;
Alpine.plugin(persist);

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
