<script>
	import '../app.pcss';
	const links = ['/home', '/about', '/blog', '/contact'];
</script>

<div class="flex gap-1">
	{#each links as link}
		<a class="underline" href={link}>{link.substring(1)}</a>
	{/each}
</div>
<slot />
