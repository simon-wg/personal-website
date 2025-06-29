<script lang="ts">
	import type { IconProps } from '@lucide/svelte';

	interface CardProps {
		Icon: import('svelte').Component<IconProps, {}, ''>;
		strokeWidth?: string;
		iconClass?: string;
		iconBackground?: string;
		title?: string;
		description?: string;
		href?: string;
	}

	const { Icon, strokeWidth, iconClass, iconBackground, title, description, href }: CardProps =
		$props();
</script>

<a
	{href}
	class="prose rounded-lg p-6 text-center transition-all duration-300 hover:bg-gray-50 hover:shadow-lg {href
		? 'cursor-pointer'
		: ''}"
>
	<div class="mb-4 flex justify-center">
		<div class="flex items-center justify-center rounded-full {iconBackground}">
			<Icon {strokeWidth} class={iconClass} />
		</div>
	</div>
	<h3 class="mb-3 text-xl font-semibold text-gray-800">{title}</h3>
	<p class="text-gray-600">
		{description}
	</p>
</a>
