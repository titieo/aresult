<script>
  // Import 3rd Party Lib
  import DarkMode from 'svelte-dark-mode';

  // Import Data
  import vi from './i18n/vi.json';
  import en from './i18n/en.json';

  // Import Components
  import Bodybg from './layouts/Bodybg.svelte';
  import Navbar from './layouts/Navbar.svelte';
  import Main from './layouts/Main.svelte';
  import Sidebar from './layouts/Sidebar.svelte';
  import Footer from './layouts/Footer.svelte';
  import { isEnglish } from './layouts/stores';

  //   Declare States

  let showSidebar = false,
    i18n,
    theme;

  isEnglish.subscribe((val) => {
    i18n = val ? en : vi;
  });

  function handleEscape(e) {
    if (e.keyCode === 27) {
      if (showSidebar) {
        showSidebar = false;
      } else {
        window.location.href = '#';
      }
    }
  }

  $: changeTheme = theme === 'dark' ? 'light' : 'dark';
  $: document.documentElement.lang = i18n.code;
  $: document.documentElement.className = theme;
</script>

<svelte:window on:keydown={handleEscape} />

<DarkMode bind:theme />

<Bodybg />
<Navbar
  bind:show={showSidebar}
  bind:isEnglish={$isEnglish}
  bind:i18n
  bind:theme
  bind:changeTheme
/>
<Main bind:i18n />
<Sidebar bind:show={showSidebar} bind:isEnglish={$isEnglish} bind:i18n />
<Footer />
