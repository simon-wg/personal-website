<script lang="ts">
	import '../app.css';
	import Navbar from '../stories/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar/>

{@render children()}