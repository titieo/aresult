<script>
  import { showSideBar, avatar, isEnglish } from './stores.js';
  import Schedule from './Schedule.svelte';
  import Details from './Details.svelte';
  import Banner from './Banner.svelte';
  function changeLanguage() {
    isEnglish.update((n) => !isEnglish); // logs '2'
  }

  function hideSideBar() {
    showSideBar.set(false);
  }
</script>

<main
  class="
  w-full
  flex-grow
  relative
  pb-5
  pt-2
  px-3
  bg-white
  dark:bg-gray-900
  flex flex-col
"
  x-data="allSubjects"
>
  <header
    class="
    grid
    border-b-2
    pt-2
    pb-4
    grid-rows-2 grid-flow-col grid-cols-header
    font-bold font-serif
    text-2xl
    col-span-full
    mb-5
    place-self-stretch
  "
  >
    <picture class="mr-4 max-w-md row-span-full">
      <source srcset={$avatar.webp} type="image/webp" />
      <source srcset={$avatar.png} type="image/png" />
      <img
        class="mx-auto mask mask-squircle h-32"
        src={$avatar.png}
        alt="Dzịt vàng đáng yêu"
      />
    </picture>
    <h2 class="self-center">
      <span class="gradient-text" x-text="data.grade">Lớp</span>
      <span>10</span>
    </h2>
    <h2 class="self-center">
      <span class="gradient-text" x-text="data.semester">Học kì</span>
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
        __.__
      </figcaption>
    </figure>
  </header>

  <Banner />
  <Schedule />
  <Details />
</main>
