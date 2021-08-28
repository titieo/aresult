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
import { allSubjects, vi, en } from './data';

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

Alpine.data('dropdown', function () {
  return {
    open: this.$persist(false),
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
      return this.isEnglish ? { ...en } : { ...vi };
    },
  };
});

Alpine.store('avatar', {
  webp: 'avatar.webp',
  png: 'avatar.png',
});

Alpine.store('showSideBar', false);

Alpine.start();
