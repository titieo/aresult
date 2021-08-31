'use strict';
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import './css/style.css';
import 'virtual:windi-utilities.css';
// import 'virtual:windi.css';
import 'virtual:windi-devtools';

// import confetti from 'canvas-confetti';

import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';
import intersect from '@alpinejs/intersect';
// Alpine.js

import { allSubjects, vi, en, sunData, moonData } from './data';

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

Alpine.data('schedule', () => {
  return {
    cells: {
      head: [
        'Buổi',
        'Tiết',
        'Thứ 2',
        'Thứ 3',
        'Thứ 4',
        'Thứ 5',
        'Thứ 6',
        'Thứ 7',
      ],
      //   head: [
      //     'Session',
      //     'Period',
      //     'Monday',
      //     'Tuesday',
      //     'Wednesday',
      //     'Thursday',
      //     'Friday',
      //     'Saturday',
      //   ],
      sun: [...sunData],
      moon: [...moonData],
    },
  };
});

Alpine.data('i18n', function () {
  return {
    isEnglish: this.$persist(false),
    // isEnglish: false,
    langCode() {
      return this.isEnglish ? 'en' : 'vi';
    },
    lang() {
      this.data = this.isEnglish ? { ...en } : { ...vi };
      return this.data;
    },
  };
});

Alpine.store('avatar', {
  webp: 'avatar.webp',
  png: 'avatar.png',
});

Alpine.store('showSideBar', false);

Alpine.start();

document.querySelectorAll('a').forEach((i) => {
  if (i.getAttribute('target') === '_blank')
    i.setAttribute('rel', 'noopener noreferrer');
});

document.querySelectorAll('img').forEach((i) => {
  i.setAttribute('loading', 'lazy');
});
