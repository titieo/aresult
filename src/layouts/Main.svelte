<script>
  import Header from './Header.svelte';
  import Banner from './Banner.svelte';
  import Details from './Details.svelte';
  export let i18n;
  import Schedule from './Schedule.svelte';
</script>

<main
  class="
  w-full
  flex-grow
  relative
  pb-5
  pt-2
  px-3
  bg-white
  dark:bg-gray-900
  flex flex-col
"
>
  <Header bind:i18n />
  <Banner bind:i18n />
  <Schedule bind:i18n />
  <Details bind:i18n />
</main>
