const poke_url = "https://pokeapi.co/api/v2/pokemon/";
const poke_url2 = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100"';

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();

  // console.log(data);
  return data;
}

async function showPokemon(url) {
  let name = "pikachu";
  url = url + name;
  console.log(url);
  const data = await getPokemon(url);
  // console.log(data.results[0].name);
  // const pokearray = data.results;
  // console.log(pokearray);

  // pokearray.forEach((pokemon) => {
  //   const poke_name = pokemon.name;
  //   console.log(poke_name);
  // });
  console.log(data);
}

showPokemon(poke_url);
