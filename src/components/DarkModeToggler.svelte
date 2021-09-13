<script>
	// Import 3rd Party Lib
	import DarkMode from 'svelte-dark-mode';

	let theme;
	$: changeTheme = theme === 'dark' ? 'light' : 'dark';
	$: document.documentElement.className = theme;
</script>

<DarkMode bind:theme />
<button
	class="cursor-pointer text-4xl btn"
	aria-label="Switch theme"
	on:click={() => (theme = changeTheme)}
>
	<i class={`uil ${theme === 'dark' ? 'uil-moon' : 'uil-sun'}`} />
</button>
