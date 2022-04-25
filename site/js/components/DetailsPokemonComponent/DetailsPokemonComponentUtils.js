import { getPokemonSearched } from "../../pokeapi.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import { sendPokemon, getMyPokemonSearched } from "../../MyPokemonApi.js";

export const takePokemonData = async (pokemonSearched) => {
  let pokemonData;
  if(pokemonSearched === "123123"){
    pokemonData = await getMyPokemonSearched(pokemonSearched);
  }else{
    pokemonData = await getPokemonSearched(pokemonSearched);
  }

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

  const elementHTML = document.querySelector(".container");
  const innerHTML = `
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
    <div class="pokemon-details">
    <div class="images">
    <img  class="pokemon-img"src="${imageFront}" alt="${name} de frente" class="front-image">
    </div>
    <section class="types"></section>
    <div class="pokemon-info">
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
    </div>
    <section class="buttons"></section>
  </div>
    </section>
    </main>
  `;
  elementHTML.innerHTML = innerHTML;
  const typeContainer = document.querySelector(".types");
  typeContainer.className = ("types pokemon-type__container")
    if (types.length >= 1) {
      const type1 = document.createElement("p");
      type1.className = `pokemon-type pokemon-type--${types[0]}`;
      typeContainer.append(type1);
    }

    if (types.length === 2) {
      const type2 = document.createElement("p");
      type2.className = `pokemon-type pokemon-type--${types[1]}`;
      typeContainer.append(type2);
    }
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

  const buttonsSection = document.querySelector(".buttons")
  const buttonAdd = new ButtonComponent(
    buttonsSection,
    "button-add",
    "",
    () => {
      sendPokemon(pokemonDetails);
      document.querySelector(".modal").style.animation = "slideIn 5s";
      setTimeout(() => {
        document.querySelector(".modal").style.animation = "slideOut 2s";
      }, 5000);
    }
  );
  buttonAdd.element.innerHTML += `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Poké_Ball_icon.svg/1026px-Poké_Ball_icon.svg.png" alt="Catch pokemon">`;
  const mainTitleSection = document.querySelector(".main-title");
  mainTitleSection.addEventListener("click", () => {
    window.location.href = `index`;
  });
};
