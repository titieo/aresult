<script>
	// Import 3rd Party Lib
	import MetaTags from 'svelte-meta-tags';

	// Import Data
	import vi from './i18n/vi.json';
	import en from './i18n/en.json';

	// Import Components
	import Bodybg from './layouts/Bodybg.svelte';
	import Navbar from './layouts/Navbar.svelte';
	import Main from './layouts/Main.svelte';
	import Sidebar from './layouts/Sidebar.svelte';
	// import Footer from './layouts/Footer.svelte';
	import { isEnglish } from './layouts/stores';
	//   import Meta from './layouts/Meta.svelte';

	//   Declare States

	let i18n;

	isEnglish.subscribe((val) => {
		i18n = val ? en : vi;
	});

	function handleEscape(e) {
		if (e.keyCode === 27) {
			window.location.href = '#';
		}
	}

	$: document.documentElement.lang = i18n.code;

	export let title, description;
</script>

<svelte:window on:keydown={handleEscape} />
<svelte:head><MetaTags {title} {description} /></svelte:head>
<Bodybg />
<Navbar {i18n} />
<Sidebar bind:isEnglish={$isEnglish} {i18n} />
<Main {i18n} />
<!-- <Footer /> -->
