<script lang="ts">
	import { page } from '$app/stores';
	import { setupViewTransition } from 'sveltekit-view-transition';

	const { transition, classes } = setupViewTransition();
</script>

<div class="flex flex-col gap-8">
	<a href="/">Home</a>
	<h1 use:transition={'pokemon'} class="text-6xl inline">{$page.params.pokemon}</h1>
</div>
