import { setLocale } from '$lib/paraglide/runtime';
import type { Preview } from '@storybook/sveltekit';
import '../src/app.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	globalTypes: {
		locale: {
			name: 'Locale',
			description: 'Choose the locale for the stories',
			defaultValue: 'en',
			toolbar: {
				title: 'Locale',
				icon: 'globe',
				items: [
					{ value: 'en', right: '🇬🇧', title: 'English' },
					{ value: 'sv', right: '🇸🇪', title: 'Swedish' }
				]
			}
		}
	},
	decorators: [
		(story, context) => {
			const locale = context.globals.locale || 'en';
			setLocale(locale);
			return story();
		}
	]
};

export default preview;
