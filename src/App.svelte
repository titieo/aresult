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

  $: switchTheme = theme === 'dark' ? 'light' : 'dark';
  //   $: document.body.className = theme; // "dark" or "light"

  const changeTheme = function () {
    theme = switchTheme;
  };

  isEnglish.subscribe((val) => {
    i18n = val ? en : vi;
  });

  function handleEscape(e) {
    console.log(e.keyCode);
    if (e.keyCode === 27) {
      if (showSidebar) {
        showSidebar = false;
      } else {
        window.location.href = '#';
      }
      console.log(e.keyCode);
    }
  }
</script>

<!-- <DarkMode bind:theme /> -->

<svelte:window on:keydown={handleEscape} />

<Bodybg />
<Navbar bind:show={showSidebar} bind:isEnglish={$isEnglish} bind:i18n />
<Main bind:i18n />
<Sidebar bind:show={showSidebar} bind:isEnglish={$isEnglish} bind:i18n />
<Footer />
