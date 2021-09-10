import { writable } from 'svelte/store';

export const showSideBar = writable(false);
export const avatar = writable({
  webp: 'avatar.webp',
  png: 'avatar.png',
});
