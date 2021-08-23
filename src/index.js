import './css/style.css';

import confetti from 'canvas-confetti';
import '@iconscout/unicons/css/line.css';
import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';
import intersect from '@alpinejs/intersect';

// eslint-disable-next-line
const allSubjects = {
  math: {
    fullName: 'Toán học',
    teacher: 'Lorem ipsum dolor sit amet.',
    bgColor: 'from-red-400 to-yellow-400 dark:from-red-500 dark:to-yellow-500',
    mainImg:
      'https://sachcuatui.net/wp-content/uploads/2019/10/sach-giao-khoa-dai-so-lop-10-nang-cao.jpg',
    first: [],
    second: [],
    third: [],
    calcAverage() {
      let division = 1;
      let average;
      let total = 0;
      division +=
        this.first.length + this.second.length * 2 + this.third.length * 3;
      if (division > 1) {
        for (let i = 0; i < this.first.length; i++) {
          total += this.first.length;
        }
        for (let i = 0; i < this.second.length; i++) {
          total += this.second.length;
        }
        for (let i = 0; i < this.third.length; i++) {
          total += this.third.length;
        }
        average = (total / division).toFixed(2);
      } else {
        average = '__.__';
      }
      this.average = average;
      return average;
    },
  },
};
// eslint-disable-next-line

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
