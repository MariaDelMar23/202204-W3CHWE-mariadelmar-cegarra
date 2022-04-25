import { deletePokemon, sendPokemon } from "../../MyPokemonApi.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component.js";

class PokemonComponent extends Component {
  pokemon;

  constructor(parentElement, className, pokemon, myPokemons) {
    super(parentElement, "li", `${className} id-${pokemon.id} col`);
    this.pokemon = pokemon;
    this.render(pokemon, myPokemons);
  }

  render(pokemon, myPokemons) {
    this.element.innerHTML = `
    <img class="pokemon-img" src="${
      (pokemon.sprites.other.dream_world.front_default !== null
      ? pokemon.sprites.other.dream_world.front_default
      : pokemon.sprites.other.home.front_default)
    }" alt="${pokemon.name}" class="pokemon-img">
    <h3 class="pokemon-name">${
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    }</h3>
    <span class="pokemon-id">Nº ${pokemon.id}</span>
    <div class="pokemon-type__container pokemon-type__container--id${
      pokemon.id
    }"></div>`;
    const typeContainer = document.querySelector(
      `.pokemon-type__container--id${pokemon.id}`
    );

    if (pokemon.types.length >= 1) {
      const type1 = document.createElement("p");
      type1.className = `pokemon-type pokemon-type--${pokemon.types[0].type.name}`;
      typeContainer.append(type1);
    }

    if (pokemon.types.length === 2) {
      const type2 = document.createElement("p");
      type2.className = `pokemon-type pokemon-type--${pokemon.types[1].type.name}`;
      typeContainer.append(type2);
    }

    this.element.innerHTML += `
    <section class="buttons-card__${pokemon.id}"></section> 
    `;

    const buttonsSection = document.querySelector(
      `.buttons-card__${pokemon.id}`
    );

    const buttonAdd = new ButtonComponent(
      buttonsSection,
      "button-add",
      "",
      () => {
        sendPokemon(pokemon);
        document.querySelector(".modal").style.animation = "slideIn 5s";
        setTimeout(() => {
          document.querySelector(".modal").style.animation = "slideOut 2s";
        }, 5000);
      }
    );
    buttonAdd.element.innerHTML += `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Poké_Ball_icon.svg/1026px-Poké_Ball_icon.svg.png" alt="Catch pokemon">`;
    if (myPokemons) {
      buttonAdd.element.remove();
      new ButtonComponent(
        buttonsSection,
        "button-delete",
        "fa-solid fa-xmark",
        () => {
          document.querySelector(`.id-${pokemon.id}`).remove();
          deletePokemon(pokemon.id);
        }
      );
    }

    const buttonDetails = new ButtonComponent(
      buttonsSection,
      "button-details",
      "",
      () => {
        window.location.href = `pokemon-details?pokemonId=${pokemon.id}`;
      }
    );
    buttonDetails.element.textContent = "Ver detalles";
  }
}

export default PokemonComponent;
