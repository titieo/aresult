<script>
	import UserIcon from 'virtual:icons/feather/user';
	import Picture from '../components/Picture.svelte';
	export let i18n, allSubjectsStore, subjectKeys;
</script>

<section
	class={`grid
    w-full
    px-5
    gap-y-5 gap-x-5
    bg-light-100
    dark:bg-cool-gray-700
    shadow-md
    dark:shadow-color-cool-gray-400
    rounded-lg
    flex-grow place-content-center
    ${subjectKeys.length ? 'grid-cols-layout py-4' : 'place-items-center'}`}
>
	{#each subjectKeys as i ($allSubjectsStore[i].id)}
		<a
			class={`rounded-lg
        shadow-md
        transform-gpu
        transition-all
        grid grid-rows-card
        gap-y-3
        pb-4
        overflow-hidden
        text-center
        place-items-center
        bg-gradient-to-br
        cursor-pointer
        hover:-translate-y-1 hover:shadow-lg hover:scale-105
        ${$allSubjectsStore[i].bgColor}
        `}
			href={`#${i}`}
		>
			<Picture
				pict={i}
				alt={i}
				pictureClass="place-self-stretch col-span-full row-start-1 row-end-2"
				imgClass="max-h-40 h-full w-full object-cover object-top"
			/>

			<h3
				class="
      text-center
      py-3
      px-5
      backdrop-filter backdrop-blur-md
      transform-gpu
      translate-y-1/2
      font-bold font-serif
      text-2xl
      rounded-md
      col-span-full
      self-end
      row-start-1 row-end-2
      bg-white bg-opacity-80
      dark:bg-gray-900 dark:bg-opacity-50
    "
			>
				{$allSubjectsStore[i].fullName[i18n.key]}
			</h3>
			<span
				class="
      col-span-full
      mt-5
      oldstyle-nums
      font-bold font-serif
      text-3xl
    ">{$allSubjectsStore[i].average || '-:-'}</span
			>
			<div
				class="col-span-full mx-2 font-serif text-xs self-end font-light flex space-x-1"
			>
				<UserIcon />
				<span>{$allSubjectsStore[i].teacher}</span>
			</div>
		</a>
	{:else}
		<figure>
			<!-- <img
				src="no-results.png"
				alt="No result"
				class="h-full max-h-md mx-auto"
			/> -->
			<picture
				><source
					type="image/webp"
					srcset="
          no-results.webp    765w,
          no-results@2x.webp 1530w,
          no-results@3x.webp 2295w
        "
				/>
				<source
					type="image/png"
					srcset="
        no-results.png    765w,
        no-results@2x.png  1530w,
        no-results@3x.png 2295w
      "
				/>
				<img
					src="no-results.png"
					alt="A bowl of curry and salmon"
					srcset="
      no-results.png    765w,
      no-results@2x.png  1530w,
      no-results@3x.png 2295w
    "
					class="h-full max-h-[50vh] mx-auto"
				/></picture
			>
			<!-- <figcaption class="text-2xl text-center">
				No data was found 😿😿😿
			</figcaption> -->
		</figure>
	{/each}
</section>
