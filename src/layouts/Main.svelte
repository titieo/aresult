<script>
	// Import Data
	import { allSubjectsStore, subjectKeys } from './stores';
	// Import components
	import AddSubject from '../components/AddSubject.svelte';
	// Import layouts
	import Header from './Header.svelte';
	import Banner from './Banner.svelte';
	import Details from './Details.svelte';
	import Schedule from './Schedule.svelte';
	// States
	export let i18n;
</script>

<main
	class="
  relative
  pb-5
  pt-2
  px-3
  bg-gray-100
  dark:bg-blue-gray-900
  flex flex-col

  overflow-y-hidden
"
>
	<!-- TODO: Not to use overflow-y-hidden -->
	{#if false}
		<AddSubject />
	{/if}

	<Header {i18n} />
	<Banner {i18n} {allSubjectsStore} {subjectKeys} />
	<Schedule {i18n} />
	<Details {i18n} {allSubjectsStore} {subjectKeys} />
</main>
