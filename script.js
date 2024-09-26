const poke_url = "https://pokeapi.co/api/v2/pokemon/";
const poke_name = document.getElementById("poke-name");
const poke_name_one = document.getElementById("poke-name-one");
const pokemon_img = document.getElementById("pokemon-img");
const pokemon_img_one = document.getElementById("pokemon-img-one");
const box1 = document.getElementById("img-box1");
const box2 = document.getElementById("img-box2");
const battle = document.getElementById("battle");

async function getPokemon(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
async function showPokemon(name) {
  const url = poke_url + name;
  const data = await getPokemon(url);
  console.log(data);
  const PokemonCard = document.createElement("div");
  PokemonCard.innerHTML = `
   <div class="img-box2">
            <img
              src=""
              width="220px"
              alt="img"
              id="pokemon-img"
            />
            <div class="power-stats-one">
              <div class="power">Atk: 78/100</div>
              <div class="def">Atk: 32/100</div>
              <div class="type">Type:Fire</div>
              <div class="stronger">Strong: Grass</div>
              <div class="weaker">Weak : Rock</div>
            </div>
          </div>
  `;
  verses.appendChild(PokemonCard);
}
async function showPokemon_one(name) {
  const url = poke_url + name;
  const data = await getPokemon(url);
  console.log(data);
  const PokemonCard = document.createElement("div");
  PokemonCard.innerHTML = `
   <div class="img-box2">
            <img
              src=""
              width="220px"
              alt="img"
              id="pokemon-img"
            />
            <div class="power-stats-one">
              <div class="power">Atk: 78/100</div>
              <div class="def">Atk: 32/100</div>
              <div class="type">Type:Fire</div>
              <div class="stronger">Strong: Grass</div>
              <div class="weaker">Weak : Rock</div>
            </div>
          </div>
  `;
  verses.appendChild(PokemonCard);
}

battle.addEventListener("click", () => {
  showPokemon(poke_name.value.toLowerCase());
  showPokemon_one(poke_name_one.value.toLowerCase());
});
