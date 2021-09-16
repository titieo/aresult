<script>
	// Import Data
	import { allSubjectsStore as allSubjects, subjectKeys } from './stores';
	// Import components
	import AddSubject from '../components/AddSubject.svelte';
	// Import layouts
	import Header from './Header.svelte';
	import Banner from './Banner.svelte';
	import Details from './Details.svelte';
	import Schedule from './Schedule.svelte';
	import Form from './Form.svelte';
	// States
	export let i18n;
	let subject, section, newScore;
	$: if (newScore) {
		allSubjects.update((i) => i[subject][section].push(newScore));
		console.log($allSubjects);
	}
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
	<!-- {#if false} -->
	<AddSubject />
	<!-- {/if} -->
	<Form
		bind:subject
		bind:section
		bind:newScore
		subjects={allSubjects}
		{subjectKeys}
		{i18n}
	/>
	<Header {i18n} />
	<Banner {i18n} allSubjectsStore={allSubjects} {subjectKeys} />
	<Schedule {i18n} />
	<Details {i18n} allSubjectsStore={allSubjects} {subjectKeys} />
</main>
