<script>
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import Icon from '@iconify/svelte';
</script>

<nav
	class="flex h-16 flex-row items-center justify-between rounded-b-lg bg-gray-800 pl-4 text-white shadow-lg"
>
	<div class="h-full flex-1">
		<a href="/" class="flex h-full items-center text-lg font-bold">Portfolio</a>
	</div>

	<div class="flex h-full">
		<a
			href="/demo/paraglide"
			class="flex h-full items-center px-4 transition-colors duration-300 ease-in-out hover:bg-red-300 hover:text-gray-800"
		>
			{m.about_me()}
		</a>
		<a
			href="/demo/paraglide"
			class="flex h-full items-center px-4 transition-colors duration-300 ease-in-out hover:bg-orange-300 hover:text-gray-800"
		>
			{m.projects()}
		</a>
		<a
			href="/demo/paraglide"
			class="flex h-full items-center px-4 transition-colors duration-300 ease-in-out hover:bg-amber-200 hover:text-gray-800"
		>
			{m.contact()}
		</a>
	</div>

	<div
		class="flex h-full items-center rounded-br-lg bg-gray-700 transition-colors duration-200 ease-in-out hover:bg-gray-600"
	>
		{#if getLocale() === 'en'}
			<button class="flex h-full items-center justify-center px-4" onclick={() => setLocale('sv')}>
				<Icon icon="flag:se-4x3" />
			</button>
		{:else if getLocale() === 'sv'}
			<button class="flex h-full items-center justify-center px-4" onclick={() => setLocale('en')}>
				<Icon icon="flag:gb-4x3" />
			</button>
		{/if}
	</div>
</nav>
