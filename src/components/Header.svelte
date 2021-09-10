<script>
  import { showSideBar, avatar, isEnglish } from './stores.js';

  function changeLanguage() {
    isEnglish.update((n) => !isEnglish); // logs '2'
  }

  function hideSideBar() {
    showSideBar.set(false);
  }
</script>

<header
  class="
        backdrop-filter backdrop-blur-md
        px-5
        h-20
        w-full
        flex
        items-center
        text-2xl text-black text-opacity-90
        sticky
        top-0
        z-10
        bg-white bg-opacity-80
        dark:bg-gray-900 dark:bg-opacity-50
        navbar
        space-x-5
      "
>
  <div
    class="nav-icon"
    :class="$store.showSideBar &&'open'"
    @click="$store.showSideBar = !$store.showSideBar"
  >
    <span />
    <span />
    <span />
    <span />
  </div>
  <h1 class="!mr-auto font-serif font-bold text-gray-700 dark:text-gray-200">
    <a href="#" x-text="data.home">Trang chủ</a>
  </h1>
  <button
    @click="isEnglish = ! isEnglish"
    class="w-14 h-10"
    aria-label="Switch language"
  >
    <img
      :src="`${langCode()}.svg`"
      :alt="langCode()"
      class="max-w-full max-h-full"
    />
  </button>
  <button
    class="cursor-pointer text-4xl"
    @click="isDarkMode = ! isDarkMode"
    aria-label="Switch theme"
  >
    <i class="uil" :class="isDarkMode ? 'uil-moon' : 'uil-sun'" />
  </button>
  <!-- <i class="uil uil-adjust-half"></i> -->
</header>
<!-- Header End -->
