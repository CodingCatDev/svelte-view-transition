<script lang="ts">
	export let data;
	import { setupViewTransition } from 'sveltekit-view-transition';

	const { transition } = setupViewTransition();
</script>

<ul>
	{#each data?.pokemon?.results as pokemon}
		<li>
			<a
				use:transition={{
					name: 'pokemon',
					shouldApply: ({ navigation }) => navigation.to?.params?.pokemon === pokemon.name,
					applyImmediately: ({ navigation, isInViewport }) =>
						navigation.from?.params?.pokemon === pokemon.name && isInViewport
				}}
				class="underline inline"
				href={`/${pokemon.name}`}>{pokemon.name}</a
			>
		</li>
	{/each}
</ul>
