<script module lang="ts">
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Layout',
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story name="Default">
	<div style="min-height: 50vh; display: flex; flex-direction: column;">
		<Header disabledLocaleReload={true} />
		<div style="flex: 1; background: #f9fafb;"></div>
		<Footer />
	</div>
</Story>
