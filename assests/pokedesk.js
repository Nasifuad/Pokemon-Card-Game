const poke_url = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
getPokemon(poke_url);
