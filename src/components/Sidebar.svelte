<script>
  import { sideBarVisibility, avatar, isEnglishLang } from './stores.js';
  let showSideBar;

  const unsubSideBar = sideBarVisibility.subscribe((value) => {
    showSideBar = value;
  });
  function changeLanguage() {
    isEnglishLang.update((n) => (n = !isEnglishLang)); // logs '2'
  }

  function hideSideBar() {
    sideBarVisibility.update((n) => (n = true));
  }
</script>

<aside class="fixed-full z-30" class:pointer-events-none={!showSideBar}>
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
    class:bg-opacity-50={showSideBar}
    class:bg-opacity-0={!showSideBar}
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
    class:-translate-x-full={!showSideBar}
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
      <picture class="mb-2">
        <source srcset={$avatar.webp} type="image/webp" />
        <source srcset={$avatar.png} type="image/png" />
        <img
          class="
                rounded
                h-[10rem]
                transition-all
                duration-500
                hover:rounded-md
              "
          srcset={$avatar.png}
          alt="Dzịt vàng đáng yêu"
        />
      </picture>

      <div class="flex space-x-2 order-1">
        <p><span x-text="data.grade" class="font-bold">Lớp</span> 10</p>
        <p>
          <span x-text="data.semester" class="font-bold">Học kì</span> I
        </p>
      </div>
      <figcaption class="font-bold">Trần Tấn Lộc</figcaption>
    </figure>
    <ul class="mx-2 space-y-2">
      <li
        class="
              flex
              align-center
              space-x-1
              py-2
              px-4
              rounded-md
              cursor-pointer
              transition-all
              border border-opacity-0 border-cool-gray-200
              dark:border-opacity-0
              dark:border-true-gray-600
              dark:hover:border-opacity-100
              dark:hover:text-light-blue-400
              hover:border-opacity-100 hover:shadow-md
            "
      >
        <a href="#" class="space-x-1 flex-grow" on:click={hideSideBar}
          ><i class="uil uil-estate" /><span
            href="#"
            x-text="data.home"
            on:click={hideSideBar}>Trang chủ</span
          ></a
        >
      </li>
      <li
        class="
              flex
              align-center
              space-x-1
              py-2
              px-4
              rounded-md
              cursor-pointer
              transition-all
              border border-opacity-0 border-cool-gray-200
              dark:border-opacity-0
              dark:border-true-gray-600
              dark:hover:border-opacity-100
              dark:hover:text-light-blue-400
              hover:border-opacity-100 hover:shadow-md
            "
      >
        <a href="#schedule" class="space-x-1 flex-grow" on:click={hideSideBar}
          ><i class="uil uil-schedule" /><span x-text="data.schedule"
            >Thời khoá biểu</span
          ></a
        >
      </li>
      <li
        class="
              flex
              align-center
              space-x-1
              py-2
              px-4
              rounded-md
              cursor-pointer
              transition-all
              border border-opacity-0 border-cool-gray-200
              dark:border-opacity-0
              dark:border-true-gray-600
              dark:hover:border-opacity-100
              dark:hover:text-light-blue-400
              hover:border-opacity-100 hover:shadow-md
            "
      >
        <a href="#" class="space-x-1 flex-grow" on:click={hideSideBar}
          ><i class="uil uil-setting" /><span x-text="data.setting"
            >Cài đặt</span
          ></a
        >
      </li>
      <li
        class="
              flex
              align-center
              py-2
              px-4
              rounded-md
              cursor-pointer
              transition-all
              border border-opacity-0 border-cool-gray-200
              dark:border-opacity-0
              dark:border-true-gray-600
              dark:hover:border-opacity-100
              dark:hover:text-light-blue-400
              hover:border-opacity-100 hover:shadow-md
            "
      >
        <a href="<%- bugs %>" target="_blank" class="space-x-1 flex-grow"
          ><i class="uil uil-bug" /><span x-text="data.bug">Góp ý</span></a
        >
      </li>
    </ul>
    <div class="border-t-2 text-center pt-1 flex-grow">
      <span x-text="data.version">Phiên bản</span>
      <!-- <span x-text="data.version">Phiên bản</span> <%- version %> -->
    </div>
    <div class="flex mx-3 items-center justify-center space-x-5">
      <button
        class="w-14 h-10"
        aria-label="Switch language"
        on:click={changeLanguage}
      >
        <!-- on:click={changeLanguage} -->
        <img alt="langCode()" class="max-w-full max-h-full" />
        <!-- src="`${langCode()}.svg`" -->
      </button>
      <button class="cursor-pointer text-4xl" aria-label="Switch theme">
        <!-- on:click={"isDarkMode = ! isDarkMode"} -->
        <i class="uil">
          <!-- :class="isDarkMode ? 'uil-moon' : 'uil-sun'" -->
        </i>
      </button>
    </div>
  </nav>
</aside>
