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
	import Footer from './layouts/Footer.svelte';
	import { isEnglish } from './layouts/stores';
	//   import Meta from './layouts/Meta.svelte';

	//   Declare States

	let showSidebar = false,
		i18n;

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

	$: document.documentElement.lang = i18n.code;

	export let title, description;
</script>

<svelte:window on:keydown={handleEscape} />
<svelte:head><MetaTags {title} {description} /></svelte:head>
<Bodybg />
<Navbar bind:show={showSidebar} bind:isEnglish={$isEnglish} {i18n} />
<Main {i18n} />
<Sidebar bind:show={showSidebar} bind:isEnglish={$isEnglish} {i18n} />
<Footer />
