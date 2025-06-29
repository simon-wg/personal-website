<script module>
	import Card from '$components/Card.svelte';
	import { CodeXml } from '@lucide/svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Card',
		component: Card,
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		},
		args: {
			Icon: CodeXml,
			strokeWidth: '2',
			iconClass: 'size-6 text-white',
			iconBackground: 'bg-gradient-to-r from-amber-200 to-red-400 size-12',
			title: 'Fullstack Developer',
			description:
				'Building modern web applications with a focus on performance and user experience.'
		}
	});
</script>

<Story name="Default" />
