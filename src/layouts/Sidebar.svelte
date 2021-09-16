<script>
	// import Logo from '../svg/logo.svg';

	// Import 3rd-party libraries
	import HomeIcon from 'virtual:icons/feather/home';
	import CalendarIcon from 'virtual:icons/feather/calendar';
	import SettingsIcon from 'virtual:icons/feather/settings';
	import GithubIcon from 'virtual:icons/feather/github';

	// Import 1rd Party Components
	import DarkModeToggler from '../components/DarkModeToggler.svelte';
	import ChangeLangButton from '../components/ChangeLangButton.svelte';
	import SideBarItem from '../components/SideBarItem.svelte';
	import Picture from '../components/Picture.svelte';
	import { avatar } from './stores.js';

	export let i18n,
		isEnglish = false;
</script>

<aside>
	<nav
		class="
          h-full
          bg-white
          dark:bg-cool-gray-700
          flex flex-col
          space-y-2
        "
	>
		<figure class="mt-4 flex justify-center">
			<img src="logo.svg" alt="Logo" class="w-3/5 max-w-18" />
			<!-- <svg class="w-3/5 max-w-18">
				<use xlink:href={`#${Logo}`} />
			</svg> -->
		</figure>
		<ul
			class="mx-2 space-y-2 mb-auto <lg:flex <lg:justify-center <lg:align-center <lg:flex-col"
		>
			<SideBarItem href="#" target=""
				><HomeIcon class="top-[0.15em] relative" /><span class="<lg:hidden"
					>{i18n.home}</span
				></SideBarItem
			>
			<SideBarItem href="#schedule" target=""
				><CalendarIcon class="top-[0.15em] relative" /><span class="<lg:hidden"
					>{i18n.schedule}</span
				></SideBarItem
			>
			<SideBarItem href="#" target=""
				><SettingsIcon class="top-[0.15em] relative" /><span class="<lg:hidden"
					>{i18n.setting}</span
				></SideBarItem
			>
			<SideBarItem
				href="https://github.com/loctran016/aresult/issues/new"
				target="_blank"
				><GithubIcon class="top-[0.15em] relative" /><span class="<lg:hidden"
					>{i18n.bug}</span
				></SideBarItem
			>
		</ul>
		<!-- <div class="border-t-2 text-center pt-1 flex-grow">
			<span>{i18n.version}</span>
		</div> -->
		<div
			class="mx-auto flex flex-col items-center justify-end space-y-4 text-center self-stretch w-full"
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
                      mx-auto h-[3rem] lg:h-[4rem]"
				/>
			</figure>
		</div>
	</nav>
</aside>
