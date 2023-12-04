<script>
	import '../app.pcss';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { setupViewTransition } from 'sveltekit-view-transition';

	const links = ['/home', '/about', '/blog', '/contact'];

	const { transition, classes } = setupViewTransition();

	classes(({ navigation }) => {
		const fromTitle = navigation.from?.params?.title;
		const toTitle = navigation.to?.params?.title;

		const fromIndex = links.findIndex((link) => link.substring(1) === fromTitle);
		const toIndex = links.findIndex((link) => link.substring(1) === toTitle);

		if (fromIndex > toIndex) {
			return ['vt-back'];
		}
	});

	// onNavigate((navigation) => {
	// 	if (!('startViewTransition' in document)) return;

	// 	return new Promise((resolve) => {
	// 		// @ts-ignore
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });
</script>

<div class="flex gap-1" use:transition={'header'}>
	{#each links as link}
		<a class:text-red-500={$page.url.pathname == link} class="underline" href={link}
			>{link.substring(1)}</a
		>
	{/each}
</div>
<slot />

<style>
	:root::view-transition-new(root) {
		animation-name: slide;
		--from: 100%;
		--to: 0%;
		animation-duration: 1s;
	}
	:root::view-transition-old(root) {
		animation-name: slide;
		--from: 0%;
		--to: -100%;
		animation-duration: 1s;
	}
	.vt-back:root::view-transition-new(root) {
		animation-name: slide;
		--from: -100%;
		--to: 0%;
		animation-duration: 1s;
	}
	.vt-back:root::view-transition-old(root) {
		animation-name: slide;
		--from: 0%;
		--to: 100%;
		animation-duration: 1s;
	}
	:root::view-transition-new(header) {
		animation-duration: 500;
	}
	:root::view-transition-old(header) {
		animation-duration: 500;
	}

	@keyframes slide {
		from {
			transform: translateX(var(--from));
		}
		to {
			transform: translateX(var(--to));
		}
	}
</style>
