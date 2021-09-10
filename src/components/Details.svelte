<template x-for="i in filteredObj">
  <section
    class="
      fixed-full
      transform-gpu
      transition-transform
      z-10
      duration-500
      translate-x-full
      target:translate-x-0
      bg-gradient-to-br
    "
    :class="items[i].bgColor"
    :id="i"
  >
    <header
      class="
        px-2
        py-4
        grid grid-cols-2
        place-items-center
        text-blue-gray-900
        bg-white
        dark:bg-gray-900 dark:text-light-200
        bg-opacity-80
        backdrop-filter backdrop-blur-md
      "
    >
      <div
        class="
          flex
          items-center
          space-x-2
          col-span-full
          row-start-1
          place-self-stretch
        "
      >
        <a href="#" class="uil uil-arrow-left text-5xl cursor-pointer" />
        <h2 class="text-2xl" x-text="items[i].fullName[langCode()]">Môn học</h2>
      </div>
      <p class="text-xl">Trung bình môn</p>
      <figure class="score h-20 lg:h-28 relative text-xl md:text-2xl order-1">
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
          x-text="items[i].average"
        >
          -:-
        </figcaption>
      </figure>
    </header>
    <template x-for="item in ['first','second','third']">
      <div
        class="
          mx-5
          my-3
          px-3
          py-3
          bg-white bg-opacity-50
          backdrop-filter backdrop-blur
          rounded-md
          group
          space-y-0
          hover:space-y-2
          transition-all
          duration-500
        "
      >
        <div class="flex space-x-2 font-bold text-lg">
          <i
            class="
              uil uil-angle-left-b
              transform-gpu
              text-xl
              -rotate-90
              group-hover:rotate-90
              transition-transform
              duration-500
            "
          />
          <h3 x-text="items[item][langCode()]">Điểm</h3>
          <!-- x-for="p in items[i][item]" -->
        </div>
        <template x-for="p in items[i][item]">
          <figure
            class="
              score
              md:text-lg
              lg:text-xl
              rounded-md
              bg-light-300
              grid
              items-center
              justify-items-end
              max-h-0
              opacity-0
              invisible
              group-hover:py-3
              group-hover:px-2
              group-hover:max-h-full
              group-hover:opacity-100
              group-hover:visible
              transition-all
              duration-500
            "
          >
            <img
              src="./laurel.svg"
              alt="laurel"
              class="
                h-12
                lg:h-20
                row-start-1 row-end-2
                col-start-1 col-end-2
              "
            />
            <figcaption
              class="
                lining-nums
                gradient-text
                row-start-1 row-end-2
                col-start-1 col-end-2
                transform-gpu
                -translate-y-0.5 -translate-x-5.5
                lg:-translate-x-10.5 lg:-translate-y-1.5
              "
              x-text="p"
            >
              -:-
            </figcaption>
          </figure>
        </template>
      </div>
    </template>
  </section></template
>
