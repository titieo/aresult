<script>
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
    i18n;
  isEnglish.subscribe((val) => {
    i18n = val ? en : vi;
  });
  // isEnglish
</script>

<Bodybg />
<Navbar bind:show={showSidebar} bind:isEnglish={$isEnglish} bind:i18n />
<Main bind:i18n />
<Sidebar bind:show={showSidebar} bind:isEnglish={$isEnglish} bind:i18n />
<Footer />
