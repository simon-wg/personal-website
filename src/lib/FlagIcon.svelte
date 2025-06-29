<script lang="ts">
	const { country }: { country: 'gb' | 'se' } = $props<{
		country: 'gb' | 'se';
	}>();

	const flags = {
		gb: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.34em" height="1em" viewBox="0 0 640 480" class="iconify iconify--flag"><path fill="#012169" d="M0 0h640v480H0z"></path><path fill="#FFF" d="m75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301L81 480H0v-60l239-178L0 64V0z"></path><path fill="#C8102E" d="m424 281l216 159v40L369 281zm-184 20l6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"></path><path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"></path><path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"></path><!----></svg>',
		se: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.34em" height="1em" viewBox="0 0 640 480" class="iconify iconify--flag"><path fill="#005293" d="M0 0h640v480H0z"></path><path fill="#fecb00" d="M176 0v192H0v96h176v192h96V288h368v-96H272V0z"></path><!----></svg>'
	};
</script>

<div class="inline-block h-4 w-6">
	{@html flags[country]}
</div>
