import { allSubjects, vi, en, sunData, moonData } from '../data';
import { writable } from 'svelte/store';

const toBoolean = (value) => {
  if (typeof value === 'string') {
    return value === 'true';
  } else {
    Boolean(value);
  }
};

export const showSideBar = writable(false);

export const avatar = writable({
  webp: 'avatar.webp',
  png: 'avatar.png',
});

// export const i18n = writable({
//   isEnglish: false,
//   // langCode() {
//   //   return isEnglish ? 'en' : 'vi';
//   // },
//   // lang() {
//   // //   data = isEnglish ? { ...en } : { ...vi };
//   //   return isEnglish ? { ...en } : { ...vi };
//   // },
// });
export const isEnglish = writable(false);
// export const isEnglish = writable(localStorage.getItem('isEnglish') || false);
// isEnglish.subscribe((val) => localStorage.setItem('isEnglish', val));
const store = writable(localStorage.getItem('store') || '');

store.subscribe((val) => localStorage.setItem('store', val));
// i18n.subscribe((value) => (value ? { ...en } : { ...vi }));
