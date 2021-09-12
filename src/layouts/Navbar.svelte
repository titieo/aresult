<script>
  // 3rd Party Lib
  import Hamburger from 'svelte-hamburgers';

  import DarkModeToggler from '../components/DarkModeToggler.svelte';
  export let show = false;
  export let i18n,
    isEnglish = false;
</script>

<header
  class="
        backdrop-filter backdrop-blur-md
        px-8
        py-2
        w-full
        flex
        items-center
        text-2xl text-black text-opacity-90
        sticky
        top-0
        z-10
        bg-white bg-opacity-80
        dark:bg-gray-900 dark:bg-opacity-50
        navbar
        space-x-5
      "
>
  <Hamburger
    bind:open={show}
    --padding="5px"
    --layer-width="2.4rem"
    --color="rgb(103, 232, 249)"
  />
  <h1 class="!mr-auto font-serif font-bold text-gray-700 dark:text-gray-200">
    <a href="#">{i18n.home}</a>
  </h1>
  <button
    class="w-12 h-8"
    aria-label="Switch language"
    on:click={() => (isEnglish = !isEnglish)}
  >
    <img alt={i18n.key} class="max-w-full max-h-full" src={`${i18n.key}.svg`} />
  </button>
  <DarkModeToggler />
</header>
<!-- Header End -->
<svelte:head>
  <!-- Import base css -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"
  />

  <!-- Import spin css (spin is default type) -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"
  />
</svelte:head>
