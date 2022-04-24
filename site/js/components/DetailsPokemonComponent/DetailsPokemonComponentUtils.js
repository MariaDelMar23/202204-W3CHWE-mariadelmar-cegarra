import { getPokemonSearched } from "../../pokeapi.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";

export const takePokemonData = async (pokemonSearched) => {
  const pokemonData = await getPokemonSearched(pokemonSearched);
  return pokemonData;
}

export const showDetails = async (pokemonSearched) => {
  const pokemonDetails = await takePokemonData(pokemonSearched);
  const {id} = pokemonDetails;
  const {name} = pokemonDetails;
  const pokemonAbilities = []
  pokemonDetails.abilities.forEach(ability => {
    pokemonAbilities.push(ability.name)
  });
  const baseExperience = pokemonDetails.base_experience;
  const {height} = pokemonDetails;
  const {weight} = pokemonDetails;
  const types = []
  pokemonDetails.types.forEach(type=>{
    types.push(type.type.name)
  })
  const imageFront = pokemonDetails.sprites.front_default;
  const imageBack = pokemonDetails.sprites.back_default;
  const hp = pokemonDetails.stats[0].base_stat;
  const attack = pokemonDetails.stats[1].base_stat;
  const deffense = pokemonDetails.stats[2].base_stat;
  const specialAttack = pokemonDetails.stats[3].base_stat;
  const specialDeffense = pokemonDetails.stats[4].base_stat;
  const speed = pokemonDetails.stats[5].base_stat;
  
  const elementHTML = document.querySelector(".pokemon-details");
  elementHTML.innerHTML = `
    <section class="change-buttons">
    </section>
  <div class="title">
    <h1 class="pokemon-name">${name}</h1>
    <h2 class="pokemon-id">${id}</h2>
  </div>
  <div class="images">
  <img src="${imageFront}" alt="${name} de frente" class="front-image">
  <img src="${imageBack}" alt="${name} de espaldas" class="back-image">
  </div>
  <section class="types">
    <p class="type1">${types[0]}</p>
    <p class="type2">${types.length === 2 ? types[1] : ""}</p>
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
  `
  const buttonSection = document.querySelector(".change-buttons")
  new ButtonComponent(buttonSection, "button-back", "fa-solid fa-chevron-left", ()=>{
    window.location.href = `pokemon-details?pokemonName=${id-1}`;
  })
  new ButtonComponent(buttonSection, "button-next", "fa-solid fa-chevron-right", ()=>{
    window.location.href = `pokemon-details?pokemonName=${id+1}`;
  })
  
}
