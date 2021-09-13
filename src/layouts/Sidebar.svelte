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

<aside>
	<nav
		class="
          h-full
          bg-white
          dark:bg-gray-900
          flex flex-col
          space-y-2
        "
	>
		<figure class="mt-4 flex justify-center">
			<img src="laurel.svg" alt="Logo" class="w-3/5 max-w-18" />
		</figure>
		<ul class="mx-2 space-y-2 mb-auto">
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
		<!-- <div class="border-t-2 text-center pt-1 flex-grow">
			<span>{i18n.version}</span>
		</div> -->
		<div
			class="mx-auto flex flex-col items-center justify-end space-y-2 text-center self-stretch w-full"
			style="margin-top: auto;"
		>
			<ChangeLangButton {i18n} bind:isEnglish />
			<DarkModeToggler />
			<figure
				class="bg-light-300 dark:bg-blue-gray-800 self-stretch py-4 px-3"
				style="align-self: stretch;"
			>
				<Picture
					pict={$avatar}
					alt="Dzịt vàng đáng yêu"
					pictureClass=""
					imgClass="mask mask-squircle
                      mx-auto h-[3rem]"
				/>
			</figure>
		</div>
	</nav>
</aside>

<!-- TODO: Fix this -->
<style>
	:global(svg) {
		top: 0 !important;
	}
</style>
