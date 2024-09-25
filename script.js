const poke_url = "https://pokeapi.co/api/v2/";
const poke_name = document.getElementById("poke-name");
const poke_name_one = document.getElementById("poke-name-one");
const pokemon_img = document.getElementById("pokemon-img");
const pokemon_img_one = document.getElementById("pokemon-img-one");
// const search = document.getElementById("Search");
// const search_one = document.getElementById("Search-one");
const battle = document.getElementById("battle");
async function getPokemon(name) {
  const res = await fetch(`${poke_url + name}`);
  const data = await res.json();
  console.log(data);
  console.log(data.sprites);
  const types = data.types.map((typeInfo) => {
    typeInfo.type.name;
  });
  console.log(types);
  return data.sprites.front_shiny;
}
async function showPokemon(name) {
  const font_image = await getPokemon(name);
  console.log(font_image);
  pokemon_img.style.display = "block";
  pokemon_img.src = font_image;
}
async function showPokemon_one(name) {
  const font_image = await getPokemon(name);
  console.log(font_image);
  pokemon_img_one.style.display = "block";
  pokemon_img_one.src = font_image;
}

battle.addEventListener("click", () => {
  showPokemon(poke_name.value.toLowerCase());
  showPokemon_one(poke_name_one.value.toLowerCase());
});
