<script>
	export let i18n, isEnglish;
</script>

<button
	class="w-12 h-8 btn"
	aria-label="Switch language"
	on:click={() => {
		isEnglish = !isEnglish;
	}}
>
	<img
		alt={i18n.key}
		src={`${i18n.key}.svg`}
		class="max-w-full max-h-full object-cover"
	/>
</button>
