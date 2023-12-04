export const load = async ({ fetch }) => {
	const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
	const pokemon = await resp.json();
	console.log(pokemon);
	return {
		pokemon
	};
};
