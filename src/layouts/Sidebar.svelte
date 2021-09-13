<script>
	// Import 3rd-party libraries
	import HomeIcon from '@svelte-parts/icons/feather/home';
	import CalendarIcon from '@svelte-parts/icons/feather/calendar';
	import SettingsIcon from '@svelte-parts/icons/feather/settings';
	import GithubIcon from '@svelte-parts/icons/feather/github';

	// Import 1rd Party Components
	import DarkModeToggler from '../components/DarkModeToggler.svelte';
	import ChangeLangButton from '../components/ChangeLangButton.svelte';
	import SideBarItem from '../components/SideBarItem.svelte';
	import Picture from '../components/Picture.svelte';
	import { avatar } from './stores.js';

	export let show = false,
		i18n,
		isEnglish = false;

	function hideSideBar() {
		show = false;
	}
</script>

<aside class="fixed-full z-30" class:pointer-events-none={!show}>
	<div
		class="
          w-full
          h-full
          bg-black
          absolute
          top-0
          -z-1
          cursor-pointer
          transition-all
          duration-300
        "
		on:click={hideSideBar}
		class:bg-opacity-50={show}
		class:bg-opacity-0={!show}
	>
		<!-- "$store.showSideBar && 'bg-opacity-50' || 'bg-opacity-0'" -->
	</div>
	<nav
		class="
          h-full
          w-[20rem]
          bg-white
          dark:bg-gray-900
          flex flex-col
          space-y-2
          transition-transform
          duration-300
          transform-gpu
          pb-2
        "
		class:-translate-x-full={!show}
	>
		<figure
			class="
            seft-stretch
            bg-card
            from-green-400
            flex flex-col
            items-center
            justify-center
            w-full
            to-blue-500
            pt-4
            pb-5
            text-center text-white text-lg
            font-serif
          "
		>
			<Picture
				pict={$avatar}
				alt="Dzịt vàng đáng yêu"
				pictureClass="mb-2"
				imgClass="mask mask-squircle
      h-[10rem]"
			/>

			<div class="flex space-x-2 order-1">
				<p>
					<span class="font-bold">{i18n.grade}</span> 10
				</p>
				<p>
					<span class="font-bold">{i18n.semester}</span> I
				</p>
			</div>
			<figcaption class="font-bold">Trần Tấn Lộc</figcaption>
		</figure>
		<ul class="mx-2 space-y-2">
			<SideBarItem href="#" {hideSideBar} target=""
				><HomeIcon /><span class="relative">{i18n.home}</span></SideBarItem
			>
			<SideBarItem href="#" {hideSideBar} target=""
				><CalendarIcon /><span>{i18n.schedule}</span></SideBarItem
			>
			<SideBarItem href="#" {hideSideBar} target=""
				><SettingsIcon /><span>{i18n.setting}</span></SideBarItem
			>
			<SideBarItem
				href="https://github.com/loctran016/aresult/issues/new"
				{hideSideBar}
				target="_blank"><GithubIcon /><span>{i18n.bug}</span></SideBarItem
			>
		</ul>
		<div class="border-t-2 text-center pt-1 flex-grow">
			<span>{i18n.version}</span>
			<!-- <span>{i18n.version}</span> <%- version %> -->
		</div>
		<div class="flex mx-3 items-center justify-center space-x-5">
			<ChangeLangButton {i18n} bind:isEnglish />
			<DarkModeToggler />
		</div>
	</nav>
</aside>

<!-- TODO: Fix this -->
<style>
	:global(svg) {
		top: 0 !important;
	}
</style>
