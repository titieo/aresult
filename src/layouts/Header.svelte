<script>
	// @ts-nocheck
	import { avatar, allSubjectsStore } from './stores.js';
	import Picture from '../components/Picture.svelte';
	export let i18n;
</script>

<header
	class="
    grid
    py-4
    px-4
    grid-rows-2 grid-flow-col grid-cols-header
    font-bold font-serif
    text-2xl
    col-span-full
    my-5
    place-self-stretch
    rounded-lg
    bg-light-100
    dark:bg-cool-gray-700
    shadow-md
    dark:shadow-color-cool-gray-400
  "
>
	<Picture
		pict={$avatar}
		pictureClass={'mr-4 max-w-md row-span-full'}
		alt="Dzịt vàng đáng yêu"
		imgClass="mx-auto mask mask-squircle h-32"
	/>
	<h2 class="self-center">
		<span class="gradient-text">{i18n.grade}</span>
		<span>10</span>
	</h2>
	<h2 class="self-center">
		<span class="gradient-text">{i18n.semester}</span>
		<span>I</span>
	</h2>
	<figure class="score row-span-full w-40 relative">
		<img src="./laurel.svg" alt="laurel" class="min-h-full" />
		<figcaption
			class="
        absolute
        top-1/2
        left-1/2
        transform-gpu
        -translate-x-1/2 -translate-y-6
        lining-nums
        gradient-text
      "
			x-text="items.average"
		>
			{$allSubjectsStore.average}
		</figcaption>
	</figure>
</header>
