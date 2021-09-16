<script>
	export let subjectKeys,
		i18n,
		subjects,
		// @ts-ignore
		subject = subjectKeys[0] || '',
		section = 'first',
		newScore;
	let score;
	const submitForm = () => {
		newScore = { date: new Date(), score: score };
		window.location.href = '#';
	};
	const changeSection = (e) => {
		section = e.target.value;
	};
	const changeSubject = (e) => {
		subject = e.target.value;
	};
</script>

<section
	class="
        fixed-full
        z-30
        backdrop-filter backdrop-blur-lg
        bg-black bg-opacity-80
        flex-center
        pointer-events-none
        opacity-0
        target:opacity-100
        target:pointer-events-auto
      "
	id="form-subject"
>
	<!-- pointer-events-none
        opacity-0
        target:opacity-100
        target:pointer-events-auto -->
	<!-- svelte-ignore a11y-missing-content -->
	<a class="abs-full z-1" href="#" />
	<form
		class="
          bg-white
          min-h-1/2
          flex flex-col
          justify-center
          rounded-lg
          overflow-hidden
          px-10
          py-8
          z-10
          space-y-2
        "
		on:submit|preventDefault={submitForm}
	>
		<div
			class="grid grid-cols-3 gap-x-2 text-center text-lg font-serif font-bold"
		>
			<input
				type="radio"
				id="first"
				name="section"
				value="first"
				on:change={changeSection}
			/>
			<input
				type="radio"
				id="second"
				name="section"
				value="second"
				on:change={changeSection}
			/>
			<input
				type="radio"
				id="third"
				name="section"
				value="third"
				on:change={changeSection}
			/>
			<label
				class="row-start-1
            row-end-1 col-start-1 col-end-2 z-10 cursor-pointer px-2 py-2 transition-colors duration-300 {section ===
					'first' && 'text-white'}"
				for="first">Hệ số I</label
			>
			<label
				for="second"
				class="z-10 cursor-pointer px-2 py-2 transform-gpu transition-colors duration-300 {section ===
					'second' && 'text-white'}">Hệ số II</label
			>
			<label
				for="third"
				class="z-10 cursor-pointer px-2 py-2 transition-colors duration-300 {section ===
					'third' && 'text-white'}">Hệ số III</label
			>
			<span
				class="row-start-1
            row-end-1 col-start-1 col-end-2 z-1 bg-indigo-600 rounded-md transform-gpu transition-transform duration-300"
			/>
		</div>
		<div
			class="flex flex-wrap space-x-1 max-w-md items-center mx-auto justify-center"
		>
			{#each subjectKeys as i ($subjects[i].id)}
				<input
					id="form-{i}"
					type="radio"
					name="subject"
					value={i}
					on:change={changeSubject}
				/>
				<label
					for="form-{i}"
					class="px-2 rounded-md py-1 cursor-pointer transition-all duration-300 {subject ===
						i && 'text-white bg-indigo-600'}"
					>{$subjects[i].fullName[i18n.key]}</label
				>
			{/each}
		</div>
		<div class="space-y-2 grid gap-y-1">
			<!-- Label -->
			<input
				type="number"
				max="10"
				min="0"
				id="score"
				bind:value={score}
				class="w-full order-1"
			/>
			<label
				for="score"
				class="ml-2 text-lg font-light font-serif block transform-gpu {!score &&
					'translate-y-12 translate-x-1 scale-90 transition-all duration-300 .pointer-events-none'}"
				>Điểm số</label
			>
		</div>
		<button
			type="submit"
			class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded-md hover:pl-10 hover:pr-6 bg-gray-50 group w-max"
		>
			<span
				class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"
			/>
			<span
				class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12 transform-gpu"
			>
				<svg
					class="w-5 h-5 text-green-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/></svg
				>
			</span>
			<span
				class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 transform-gpu"
			>
				<svg
					class="w-5 h-5 text-green-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/></svg
				>
			</span>
			<span
				class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
				>Button Text</span
			>
		</button>
	</form>
</section>

<style>
	input[type='radio'] {
		display: none;
	}

	#first:checked ~ span {
		--tw-translate-x: 0;
	}
	#second:checked ~ span {
		--tw-translate-x: calc(100% + 0.5rem);
	}
	#third:checked ~ span {
		--tw-translate-x: calc(200% + 1rem);
	}

	#score:focus + label {
		--tw-translate-y: 0;
		--tw-translate-x: 0;
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		--tw-scale-z: 1;

		font-weight: bold;
		pointer-events: auto;
	}
</style>
