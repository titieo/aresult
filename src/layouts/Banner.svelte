<script>
  import { allSubjectsStore, subjectKeys } from './stores';
</script>

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
  {#each subjectKeys as i}
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
      <picture class="place-self-stretch col-span-full row-start-1 row-end-2">
        <source srcset={`${i}.webp`} type="image/webp" />
        <source srcset={`${i}.png`} type="image/png" />
        <img
          src={`${i}.png`}
          class="max-h-40 h-full w-full object-cover object-top"
          alt={i}
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
      >
        {$allSubjectsStore[i].fullName.vi}
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
      <div class="col-span-full mx-2 font-serif text-xs self-end font-light">
        <i class="uil uil-user-circle mr-1" /><span
          >{$allSubjectsStore[i].teacher}</span
        >
      </div>
    </a>
  {/each}
</section>
