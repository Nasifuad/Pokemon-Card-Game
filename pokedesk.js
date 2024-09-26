const poke_url = "https://pokeapi.co/api/v2/pokemon/";
const poke_url2 = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100"';

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();

  // console.log(data);
  return data;
}
for (let i = 1; i <= 20; i++) {
  async function showPokemon(url) {
    // let name = "pikachu";
    let id = i;
    url = url + id;
    const data = await getPokemon(url);
    console.log(data);
    const type = data.types[0].type.name;
    const name = data.name;
    const img_link = data.sprites.front_default;
    const ability_arr = [];
    const base_power = data.base_experience;
    console.log(base_power);
    for (let i = 0; i < data.abilities.length; i++) {
      ability_arr.push(data.abilities[i].ability.name);
    }
    console.log(ability_arr);
    console.log(name);
    console.log(data.types[0].type.name);
  }
  showPokemon(poke_url);
}
