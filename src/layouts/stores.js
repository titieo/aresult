/* eslint-disable no-unused-vars */
import { allSubjects, vi, en, sunData, moonData } from '../data';
import { writable } from 'svelte/store';

const toBoolean = (value) => {
  if (typeof value === 'string') {
    return value === 'true';
  } else {
    Boolean(value);
  }
};

export const sideBarVisibility = writable(false);

export const avatar = writable('avatar');

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
export const isEnglishLang = writable(false);
// export const isEnglish = writable(localStorage.getItem('isEnglish') || false);
// isEnglish.subscribe((val) => localStorage.setItem('isEnglish', val));
const store = writable(localStorage.getItem('store') || '');

export const allSubjectsStore = writable(allSubjects);

store.subscribe((val) => localStorage.setItem('store', val));
// i18n.subscribe((value) => (value ? { ...en } : { ...vi }));
