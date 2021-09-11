/* eslint-disable no-unused-vars */
import { writable } from 'svelte/store';
import { allSubjects } from '../data';

let subjectKeys;
const toBoolean = (value) => {
  if (typeof value === 'string') {
    return value === 'true';
  } else {
    Boolean(value);
  }
};

export const avatar = writable('avatar');

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

const store = writable(localStorage.getItem('store') || '');
store.subscribe((val) => localStorage.setItem('store', val));

export { subjectKeys };
