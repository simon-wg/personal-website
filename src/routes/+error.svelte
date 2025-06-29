<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$components/Button.svelte';
	import Card from '$components/Card.svelte';
	import { m } from '$lib/paraglide/messages';
	import { Blocks, House, Mail, UserRound } from '@lucide/svelte';
</script>

<main class="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100">
	<section class="flex flex-1 items-center justify-center px-6 py-16">
		<div class="max-w-4xl text-center">
			<div class="mb-8">
				<h1 class="mb-4 text-8xl font-bold text-gray-800 md:text-9xl">
					<span
						class="bg-gradient-to-r from-red-400 via-orange-300 to-amber-200 bg-clip-text text-transparent"
					>
						{$page.status}
					</span>
				</h1>
				<div
					class="mx-auto h-1 w-24 bg-gradient-to-r from-red-400 via-orange-300 to-amber-200"
				></div>
			</div>

			<h2 class="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
				{#if $page.status === 404}
					{m.page_not_found()}
				{:else}
					{m.something_went_wrong()}
				{/if}
			</h2>

			<p class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-700">
				{#if $page.status === 404}
					{m.error_404_desc()}
				{:else}
					{m.error_general_desc()}
				{/if}
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href="/" variant="primary"
					>{m.back_to_home()}<House
						class="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1"
					/></Button
				>
				<Button onclick={() => history.back()} variant="secondary" arrow="left"
					>{m.go_back()}</Button
				>
			</div>
		</div>
	</section>

	<section class="bg-white px-6 py-16">
		<div class="mx-auto max-w-4xl text-center">
			<h3 class="mb-8 text-2xl font-bold text-gray-800">{m.looking_for_something()}</h3>
			<div class="grid gap-6 md:grid-cols-3">
				<Card
					Icon={UserRound}
					strokeWidth="2.5"
					iconClass="h-6 w-6 text-white"
					iconBackground="bg-gradient-to-r from-red-400 to-orange-300 size-12"
					title={m.about()}
					description={m.about_me_desc()}
					href="/about"
				/>

				<Card
					Icon={Blocks}
					strokeWidth="2.5"
					iconClass="h-6 w-6 text-white"
					iconBackground="bg-gradient-to-r from-orange-300 to-amber-200 size-12"
					title={m.projects()}
					description={m.projects_desc()}
					href="/projects"
				/>
				<Card
					Icon={Mail}
					strokeWidth="2.5"
					iconClass="h-6 w-6 text-white"
					iconBackground="bg-gradient-to-r from-amber-200 to-red-400 size-12"
					title={m.contact()}
					description={m.contact_desc()}
					href="/contact"
				/>
			</div>
		</div>
	</section>
</main>
