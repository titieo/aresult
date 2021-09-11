/* eslint-disable no-unused-vars */
import { allSubjects, sunData, moonData } from '../data';
import en from '../i18n/en.json';
import vi from '../i18n/vi.json';
import { writable } from 'svelte/store';
let subjectKeys, i18n;
const toBoolean = (value) => {
  if (typeof value === 'string') {
    return value === 'true';
  } else {
    Boolean(value);
  }
};

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
// export const isEnglishLang = writable(false);
// export const isEnglish = writable(localStorage.getItem('isEnglish') || false);
// isEnglish.subscribe((val) => localStorage.setItem('isEnglish', val));
const store = writable(localStorage.getItem('store') || '');

export const allSubjectsStore = writable(allSubjects);
export const isEnglish = writable(false);

allSubjectsStore.subscribe((val) => {
  const filtered = Object.keys(val).filter((i) => {
    return (
      typeof val[i] === 'object' &&
      i !== 'first' &&
      i !== 'second' &&
      i !== 'third'
    );
  });
  subjectKeys = filtered;
});
export { subjectKeys };
store.subscribe((val) => localStorage.setItem('store', val));
// i18n.subscribe((value) => (value ? { ...en } : { ...vi }));
