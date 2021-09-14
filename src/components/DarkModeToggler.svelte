<script>
	// Import 3rd Party Lib
	import DarkMode from 'svelte-dark-mode';
	import SunIcon from '../svg/sun.svg';
	import MoonIcon from '../svg/moon.svg';

	let theme;
	$: changeTheme = theme === 'dark' ? 'light' : 'dark';
	$: document.documentElement.className = theme;
</script>

<DarkMode bind:theme />
<button
	class={`cursor-pointer h-18 w-18 flex-center bg-gradient-to-br btn rounded-2xl  shadow-md ${
		theme === 'dark'
			? 'from-cyan-300 to-blue-400'
			: 'from-yellow-500 to-orange-500'
	}`}
	aria-label="Switch theme"
	on:click={() => (theme = changeTheme)}
>
	<!-- <img
		src={theme === 'dark' ? 'moon.svg' : 'sun.svg'}
		class="h-18"
		alt="Change Theme"
	/> -->
	<svg class="mx-1">
		<use xlink:href={`#${theme === 'dark' ? MoonIcon : SunIcon}`} />
	</svg>
</button>
