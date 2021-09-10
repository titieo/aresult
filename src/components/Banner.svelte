<section
  class="
grid grid-cols-layout
w-full
px-5
py-3
gap-y-5 gap-x-5
flex-grow
max-w-con
"
>
  <template x-for="i in filteredObj">
    <a
      class="
    rounded-lg
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
  "
      x-data="items[i]"
      :class="bgColor"
      :href="`#${name}`"
    >
      <picture class="place-self-stretch col-span-full row-start-1 row-end-2">
        <source :srcset="`${name}.webp`" type="image/webp" />
        <source :srcset="`${name}.png`" type="image/png" />
        <img
          :src="`${name}.png`"
          class="max-h-40 h-full w-full object-cover object-top"
          :alt="i"
        />
      </picture>
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
        x-text="fullName[langCode()]"
      />
      <span
        class="
      col-span-full
      mt-5
      oldstyle-nums
      font-bold font-serif
      text-3xl
    "
        x-text="average">__.__</span
      >
      <div class="col-span-full mx-2 font-serif text-xs self-end font-light">
        <i class="uil uil-user-circle mr-1" /><span x-text="teacher" />
      </div>
    </a>
  </template>
</section>
