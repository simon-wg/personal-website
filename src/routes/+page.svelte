<script lang="ts">
	import Button from '$components/Button.svelte';
	import Card from '$components/Card.svelte';
	import { m } from '$lib/paraglide/messages';
	import { CodeXml, Mail, SquareChevronRight, Zap } from '@lucide/svelte';
</script>

<main class="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100">
	<section class="flex flex-1 items-center justify-center px-6 py-16">
		<div class="prose max-w-4xl text-center">
			<h1 class="mb-6 text-5xl md:text-7xl">
				<span
					class="bg-gradient-to-r from-red-400 via-orange-300 to-amber-200 bg-clip-text text-transparent"
				>
					Simon Westlin Green
				</span>
			</h1>
			<p class="mb-8 text-xl md:text-2xl">{m.job_title()}</p>
			<p class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed">
				{m.welcome()}
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href="/projects" variant="primary" arrow="right">{m.my_work()}</Button>
				<Button href="/contact" variant="secondary">{m.about()}</Button>
			</div>
		</div>
	</section>

	<section class="bg-white px-6 py-16">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-gray-800">{m.what_i_do()}</h2>
			<div class="grid gap-8 md:grid-cols-3">
				<Card
					Icon={SquareChevronRight}
					strokeWidth="2.5"
					iconClass="h-8 w-8 text-white"
					iconBackground="bg-gradient-to-r from-red-400 to-orange-300 size-16"
					title={m.fullstack_dev()}
					description={m.fullstack_desc()}
				/>

				<Card
					Icon={CodeXml}
					strokeWidth="2.5"
					iconClass="h-8 w-8 text-white"
					iconBackground="bg-gradient-to-r from-orange-300 to-amber-200 size-16"
					title={m.ui_ux_design()}
					description={m.ui_ux_desc()}
				/>

				<Card
					Icon={Zap}
					strokeWidth="2.5"
					iconClass="h-8 w-8 text-white"
					iconBackground="bg-gradient-to-r from-amber-200 to-red-400 size-16"
					title={m.performance_opt()}
					description={m.performance_desc()}
				/>
			</div>
		</div>
	</section>

	<section class="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-16 text-white">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-6 text-3xl font-bold">{m.ready_to_work()}</h2>
			<p class="mb-8 text-lg text-gray-300">
				{m.discuss_project()}
			</p>
			<Button variant="tertiary" href="/contact"
				>{m.get_in_touch()}<Mail class="ml-2 size-5" /></Button
			>
		</div>
	</section>
</main>
