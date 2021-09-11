<script>
  import Bodybg from './layouts/Bodybg.svelte';
  import Navbar from './layouts/Navbar.svelte';
  import Main from './layouts/Main.svelte';
  import Sidebar from './layouts/Sidebar.svelte';
  import Footer from './layouts/Footer.svelte';

  let showSidebar = false,
    isEnglish = false;
</script>

<Bodybg />
<Navbar bind:show={showSidebar} />
<Main />
<Sidebar bind:show={showSidebar} />
<Footer />
