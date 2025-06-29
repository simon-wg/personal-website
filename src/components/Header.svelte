<script lang="ts">
	import FlagIcon from '$lib/FlagIcon.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';

	const { disabledLocaleReload = false }: { disabledLocaleReload?: boolean } = $props<{
		disabledLocaleReload?: boolean;
	}>();
	const navLinkClasses = 'flex h-full items-center px-4 transition-colors duration-300 ease-in-out';
	const langButtonClasses = 'flex h-full items-center justify-center px-4';
</script>

<header
	class="relative flex h-16 w-full flex-row items-center justify-between bg-gray-800 text-white shadow-lg"
>
	<div class="flex h-full justify-start">
		<a href="/" class="{navLinkClasses} text-lg font-bold hover:text-red-400">
			Simon Westlin Green</a
		>
	</div>

	<div class="absolute left-1/2 flex h-full -translate-x-1/2">
		<a href="/about" class="{navLinkClasses} hover:bg-red-300 hover:text-gray-800">
			{m.about()}
		</a>
		<a href="/projects" class="{navLinkClasses} hover:bg-orange-300 hover:text-gray-800">
			{m.projects()}
		</a>
		<a href="/contact" class="{navLinkClasses} hover:bg-amber-200 hover:text-gray-800">
			{m.contact()}
		</a>
	</div>

	<div
		class="flex h-full items-center justify-end bg-gray-700 transition-colors duration-200 ease-in-out hover:bg-gray-600"
	>
		<button
			class="{langButtonClasses} {getLocale() === 'en' ? '' : 'hidden'}"
			onclick={() => setLocale('sv', { reload: !disabledLocaleReload })}
		>
			<FlagIcon country="se" />
		</button>
		<button
			class="{langButtonClasses} {getLocale() === 'sv' ? '' : 'hidden'}"
			onclick={() => setLocale('en', { reload: !disabledLocaleReload })}
		>
			<FlagIcon country="gb" />
		</button>
	</div>
</header>
