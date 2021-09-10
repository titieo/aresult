import { allSubjects, vi, en, sunData, moonData } from '../data';
import { writable } from 'svelte/store';

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

// i18n.subscribe((value) => (value ? { ...en } : { ...vi }));
