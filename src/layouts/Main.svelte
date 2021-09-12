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
	<Header {i18n} />
	<Banner {i18n} />
	<Schedule {i18n} />
	<Details {i18n} />
</main>
