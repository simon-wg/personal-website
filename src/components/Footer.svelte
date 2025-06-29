<script lang="ts">
	const footerLinkClasses =
		'flex items-center p-4 transition-colors duration-300 ease-in-out text-sm';
</script>

<footer
	class="relative flex h-16 w-full flex-row items-center justify-between bg-gray-800 text-white shadow-lg"
>
	<div class="flex h-full items-center px-4">
		<span class="text-sm">© 2025 Simon Westlin Green. All rights reserved.</span>
	</div>
	<div class="flex h-full items-center space-x-4" dir="ltr">
		<a href="/privacy" class="{footerLinkClasses} hover:text-red-400">Privacy Policy</a>
		<a href="/terms" class="{footerLinkClasses} hover:text-orange-300">Terms</a>
		<a href="/contact" class="{footerLinkClasses} hover:text-amber-200">Contact</a>
	</div>
</footer>
