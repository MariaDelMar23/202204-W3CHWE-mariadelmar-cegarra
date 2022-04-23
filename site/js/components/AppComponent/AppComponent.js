import { bufferNextPokemons, getPokemonSearched } from "../../pokeapi.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component.js";
import PokemonComponent from "../PokemonComponent/PokemonComponent.js";

class AppComponent extends Component {
  pokemons;

  constructor(parentElement) {
    super(parentElement, "div", "container");
  }

  render() {
    this.element.innerHTML = `<header class="main-header">
        <h1 class="main-title"><img src="images/pokemon-logo.svg" alt="Pokemon"></h1>
      </header>
      <main class="main">
        <section class="pokemons-list">
          <h2 class="section-title">All Pokémons</h2>
        </section>
      </main>`;
    const pokemonsList = document.querySelector(".pokemons-list");
    new PokemonComponent(pokemonsList, "pokemon", getPokemonSearched);
    new ButtonComponent(
      pokemonsList,
      "search-btn",
      "",
      "search",
      bufferNextPokemons
    );
  }
}

export default AppComponent;
