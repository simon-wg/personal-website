<script lang="ts">
	import { MoveLeft, MoveRight } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		children: Snippet;
		variant?: 'primary' | 'secondary' | 'tertiary';
		arrow?: 'left' | 'right' | null;
		disabled?: boolean;
		type?: 'button' | 'submit';
		href?: string | null;
		onclick?: () => void;
		className?: string;
	}

	const primaryVariant =
		'bg-gray-800 text-white shadow-lg hover:bg-gradient-to-r hover:from-red-400 hover:via-orange-300 hover:to-amber-200 hover:text-gray-800 hover:shadow-xl';
	const secondaryVariant =
		'border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white';
	const tertiaryVariant =
		'bg-gradient-to-r from-red-400 via-orange-300 to-amber-200 text-gray-800 hover:shadow-xl hover:brightness-110';

	const { children, variant, arrow, disabled, type, href, onclick, className }: ButtonProps =
		$props();
</script>

{#if href}
	<a
		{href}
		class={`group inline-flex items-center rounded-lg px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out ${
			variant === 'primary'
				? primaryVariant
				: variant === 'secondary'
					? secondaryVariant
					: tertiaryVariant
		} ${className}`}
		aria-disabled={disabled}
		tabindex={disabled ? -1 : 0}
	>
		{#if arrow === 'left'}
			<MoveLeft class="mr-2 size-5 transition-transform duration-300 group-hover:-translate-x-1" />
		{/if}
		{@render children()}
		{#if arrow === 'right'}
			<MoveRight class="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
		{/if}
	</a>
{:else}
	<button
		{onclick}
		{type}
		class={`group inline-flex items-center rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-none ${onclick ? 'cursor-pointer' : ''} ${
			variant === 'primary'
				? primaryVariant
				: variant === 'secondary'
					? secondaryVariant
					: tertiaryVariant
		} ${className}`}
		{disabled}
	>
		{#if arrow === 'left'}
			<MoveLeft class="mr-2 size-5 transition-transform duration-300 group-hover:-translate-x-1" />
		{/if}
		{@render children()}
		{#if arrow === 'right'}
			<MoveRight class="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
		{/if}
	</button>
{/if}
