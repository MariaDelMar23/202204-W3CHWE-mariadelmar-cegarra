import { sendPokemon } from "../../MyPokemonApi.js";
import { getPokemonSearched } from "../../pokeapi.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";

export const takePokemonData = async (pokemonSearched) => {
  const pokemonData = await getPokemonSearched(pokemonSearched);
  return pokemonData;
};

export const showDetails = async (pokemonSearched) => {
  const pokemonDetails = await takePokemonData(pokemonSearched);
  const { id } = pokemonDetails;
  const { name } = pokemonDetails;
  const pokemonAbilities = [];
  pokemonDetails.abilities.forEach((ability) => {
    pokemonAbilities.push(ability.ability.name);
  });
  const baseExperience = pokemonDetails.base_experience;
  const { height } = pokemonDetails;
  const { weight } = pokemonDetails;
  const types = [];
  pokemonDetails.types.forEach((type) => {
    types.push(type.type.name);
  });
  const imageFront =
    pokemonDetails.sprites.other.dream_world.front_default !== null
      ? pokemonDetails.sprites.other.dream_world.front_default
      : pokemonDetails.sprites.other.home.front_default;
  const hp = pokemonDetails.stats[0].base_stat;
  const attack = pokemonDetails.stats[1].base_stat;
  const deffense = pokemonDetails.stats[2].base_stat;
  const specialAttack = pokemonDetails.stats[3].base_stat;
  const specialDeffense = pokemonDetails.stats[4].base_stat;
  const speed = pokemonDetails.stats[5].base_stat;

  const elementHTML = document.querySelector(".pokemon-details");
  elementHTML.innerHTML = `
  <div class="container">
  <div class="modal">
      <p>El Pokemon ha sido añadido a "Mis Pokemon"</p>
    </div>
  <header class="main-header">
  <nav>
  <section><h1 class="main-title"><img src="images/pokemon-logo.svg" alt="Pokemon"></h1></section>
    <a href="myPokemon.html">Mis Pokémons</a>
    <a href='pokemon-details?pokemonId=${Math.floor(
      Math.random() * 898 + 1
    )}'>Pokémon Aleatorio</a>
  </nav>
</header>
<main class="main"> 
<section class="pokemons">
    <section class="change-buttons">
    </section>
  <div class="section-title">
    <h1 class="pokemon-name">${name.charAt(0).toUpperCase() + name.slice(1)}</h1>
    <h2 class="pokemon-id">${id}</h2>
  </div>
  <div class="images">
  <img src="${imageFront}" alt="${name} de frente" class="front-image">
  </div>
  <section class="types">
    <p class="type1">${types[0]}</p>
    <p class="type2">${types.length === 2 ? types[1] : ""}</p>
  </section>
  <section class="abilities">
  <p class="ability1">${pokemonAbilities[0]}</p>
  <p class="ability2">${
    pokemonAbilities.length === 2 ? pokemonAbilities[1] : ""
  }</p>
  </section>
  <ul class="stats">
    <li class="stat-points">PS: ${hp}</li>
    <li class="stat-points">Ataque: ${attack}</li>
    <li class="stat-points">Defensa: ${deffense}</li>
    <li class="stat-points">Ataque especial: ${specialAttack}</li>
    <li class="stat-points">Defensa especial: ${specialDeffense}</li>
    <li class="stat-points">Velocidad: ${speed}</li>
  </ul>
  <ul class="details">
    <li class="details-info">Experiencia base: ${baseExperience}</li>
    <li class="details-info">Altura: ${height}</li>
    <li class="details-info">Peso: ${weight}</li>
  </ul>
  </section>
  </main>
  </div>
  `;
  const buttonSection = document.querySelector(".change-buttons");
  new ButtonComponent(
    buttonSection,
    "button-back",
    "fa-solid fa-chevron-left",
    () => {
      window.location.href = `pokemon-details?pokemonName=${id - 1}`;
    }
  );
  new ButtonComponent(
    buttonSection,
    "button-next",
    "fa-solid fa-chevron-right",
    () => {
      window.location.href = `pokemon-details?pokemonName=${id + 1}`;
    }
  );

  const titleSection = document.querySelector(".title");
  new ButtonComponent(titleSection, "add-button", "pokemon-btn--details", () =>
    sendPokemon(pokemonDetails)
  );
  const mainTitleSection = document.querySelector(".main-title");
  mainTitleSection.addEventListener("click", () => {
    window.location.href = `index`;
  });
};
