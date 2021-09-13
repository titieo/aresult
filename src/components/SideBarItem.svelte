<script>
	export let href, target;
</script>

<li
	class="
              flex
              align-center
              space-x-1
              py-2
              px-4
              rounded-md
              cursor-pointer
              transform
              transition-all
              duration-200 ease-in-out
              border border-opacity-0 border-cool-gray-200
              dark:border-opacity-0
              dark:border-true-gray-600
              dark:hover:border-opacity-100
              dark:hover:text-light-blue-400
              hover:border-opacity-100 hover:shadow-md
              active:scale-95
            "
>
	<a {href} class="space-x-4 flex-grow flex" target={target || '_self'}
		><slot /></a
	>
</li>
