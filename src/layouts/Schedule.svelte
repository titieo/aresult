<script>
  //   import { each } from 'svelte/internal';
  import { cells } from '../data';
  //   import Header from './Header.svelte';
  export let i18n;
</script>

<section
  id="schedule"
  class="
bg-white
dark:bg-gray-900
fixed-full
transform-gpu
transition-transform
z-10
duration-500
translate-x-full
target:translate-x-0
grid grid-rows-[auto,1fr]
"
>
  <header
    class="
  w-full
  bg-light-blue-400
  py-1
  px-3
  mb-5
  flex
  space-x-2
  items-center
  text-light-200
"
  >
    <a href="#" class="uil uil-arrow-left text-5xl cursor-pointer" />
    <h2 class="text-2xl font-serif font-bold">
      {i18n.schedule}
    </h2>
  </header>
  <div
    class="
  scrollbar-primary
  rounded-lg
  max-w-con
  border
  shadow-md
  place-self-center
  mx-5
"
  >
    <table
      role="grid"
      x-data="schedule"
      class="border rounded-lg w-full table-fixed"
    >
      <thead class="sticky top-0 bg-blue-500 text-white border-none">
        <tr class="border-none">
          {#each cells.head as i}
            <th
              class="
            border
            py-4
            px-3
            border-t-0
            first-of-type:border-l-0 first-of-type:rounded-tl-lg
            last-of-type:border-r-0 last-of-type:rounded-tr-lg
            font-bold
            text-lg
            whitespace-nowrap
          "
              data-column-id={i}>{i}</th
            >
          {/each}
        </tr>
      </thead>
      <tbody class="border-none">
        {#each cells.sun as item}
          <tr class="border-none">
            {#each item as cell, index}
              <!-- <template x-for="(cell,index) in cells.sun[item-1]"> -->
              <td
                rowspan={index === 0 && cell && cells.sun.length}
                class={`border
                    first-of-type:border-l-0
                    last-of-type:border-r-0 ${
                      index === 0 && cell ? 'text-7xl' : 'py-1.5 px-2.5'
                    } ${index !== 0 || cell || 'hidden'}`}
              >
                {@html cell}</td
              >
            {/each}
          </tr>
        {/each}

        <tr>
          <td
            colspan={cells.head.length}
            class="
          border
          py-2.5
          border-l-0 border-r-0
          text-lg
          font-sans font-bold
          uppercase
          bg-rainbow bg-opacity-80
          text-light-200
        "
          >
            🎉🎊🥳 Ăn trưa 🎉🎊🥳
          </td>
        </tr>

        {#each cells.moon as item}
          <tr class="border-none">
            {#each item as cell, index}
              <td
                rowspan={index === 0 && cell && cells.moon.length}
                class={`border
                  first-of-type:border-l-0
                  last-of-type:border-r-0 ${
                    index === 0 && cell ? 'text-7xl' : 'py-1.5 px-2.5'
                  } ${index !== 0 || cell || 'hidden'}`}
              >
                {@html cell}</td
              >
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
<!-- Schedule End -->
