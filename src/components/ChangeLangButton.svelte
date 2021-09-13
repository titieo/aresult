<script>
	export let i18n, isEnglish;
</script>

<button
	aria-label="Switch language"
	on:click={() => {
		isEnglish = !isEnglish;
	}}
>
	<img
		alt={i18n.key}
		src={`${i18n.key}.svg`}
		class="w-10 h-10 md:w-12 md:h-12 rounded object-cover"
	/>
</button>
