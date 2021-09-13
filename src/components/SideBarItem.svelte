<script>
	export let hideSideBar, href, target;
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
              transition-all
              border border-opacity-0 border-cool-gray-200
              dark:border-opacity-0
              dark:border-true-gray-600
              dark:hover:border-opacity-100
              dark:hover:text-light-blue-400
              hover:border-opacity-100 hover:shadow-md
            "
>
	<a
		{href}
		class="space-x-1 flex-grow flex"
		on:click={hideSideBar}
		target={target || '_self'}><slot /></a
	>
</li>
