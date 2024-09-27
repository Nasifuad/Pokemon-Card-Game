const poke_url = "https://pokeapi.co/api/v2/pokemon/";
const poke_name = document.getElementById("poke-name");
const poke_name_one = document.getElementById("poke-name-one");
const pokemon_img = document.getElementById("pokemon-img");
const pokemon_img_one = document.getElementById("pokemon-img-one");
const box1 = document.getElementById("img-box1");
const box2 = document.getElementById("img-box2");
const battle = document.getElementById("battle");
const battle1 = document.getElementById("battle1");

async function getPokemon(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function showPokemon(name) {
  const url = poke_url + name;
  const data = await getPokemon(url);
  const src = data.sprites.front_default;
  const atk = data.base_experience;
  const hp = data.stats[0].base_stat;
  const type = data.types[0].type.name;
  const ability = data.abilities[0].ability.name;
  console.log(src);
  console.log(data);
  const PokemonCard = document.createElement("div");
  box1.innerHTML = `
   <div class="img-box2">
            <img
              src="${src}"
              width="220px"
              alt="img"
              id="pokemon-img"
            />
            <p class="name"> ${name} </p>
            <div class="power-stats-one">
              <div class="power">Atk: ${atk}</div>
              <div class="def">Def: ${hp}</div>
              <div class="type">Type: ${type}</div>
              <div class="atk">Ability : ${ability}</div>
            </div>
          </div>
  `;
  // box1.appendChild(PokemonCard);
}
async function showPokemon_one(name) {
  const url = poke_url + name;
  const data = await getPokemon(url);
  const src = data.sprites.front_default;
  const atk = data.base_experience;
  const hp = data.stats[0].base_stat;
  const type = data.types[0].type.name;
  const ability = data.abilities[0].ability.name;
  console.log(src);
  console.log(data);
  box2.innerHTML = `
   <div class="img-box2">
            <img
              src="${src}"
              width="220px"
              alt="img"
              id="pokemon-img"
            />
            <p class="name"> ${name} </p>
            <div class="power-stats-one">
              <div class="power">Atk: ${atk}</div>
              <div class="def">Def: ${hp}</div>
              <div class="type">Type: ${type}</div>
              <div class="atk">Ability : ${ability}</div>
            </div>
          </div>
  `;
  // box2.appendChild(PokemonCard);
}

battle1.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");
  showPokemon(poke_name.value.toLowerCase());
  showPokemon_one(poke_name_one.value.toLowerCase());
});
battle.addEventListener("click", () => {
  showPokemon(poke_name.value.toLowerCase());
  showPokemon_one(poke_name_one.value.toLowerCase());
});

const login = document.getElementById("login");
const signup = document.getElementById("signup");
const login_page = document.getElementById("main-login");
const signup_page = document.getElementById("main-signup");
const mainn = document.getElementById();
login.addEventListener("click", () => {
  login_page.style.display = "block";
});
