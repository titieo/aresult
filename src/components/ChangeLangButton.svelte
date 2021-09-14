<script>
	import ViSvg from '../svg/vi.svg';
	import EnSvg from '../svg/en.svg';
	export let i18n, isEnglish;
</script>

<button
	aria-label="Switch language"
	on:click={() => {
		isEnglish = !isEnglish;
	}}
	class="btn rounded overflow-hidden"
>
	<!-- <img
		alt={i18n.key}
		src={`${i18n.key}.svg`}
		class="w-10 h-10 md:w-12 md:h-12 rounded object-cover"
	/> -->
	<svg
		class="w-10 h-10 md:w-12 md:h-12 rounded object-cover transform scale-[1.4]"
		style="

        --tw-scale-x: 1.3;
        --tw-scale-y: 1.3;
        "
	>
		<use
			class="h-full w-full"
			xlink:href={`#${i18n.key === 'vi' ? ViSvg : EnSvg}`}
		/>
	</svg>
</button>
