import Component from "../Component.js";
import PokemonsComponent from "../PokemonsComponents/PokemonsComponent.js";

class AppComponent extends Component {
  pokemons;

  constructor(parentElement) {
    super(parentElement, "div", "container");
    this.render()
  }

  render() {
    this.element.innerHTML = `<header class="main-header">
        <h1 class="main-title"><img src="images/pokemon-logo.svg" alt="Pokemon"></h1>
      </header>
      <main class="main"> 
        <section class="pokemons">
          <h2 class="section-title">All Pokémons</h2>
        </section>
      </main>`;
     
    const pokemonsSection = document.querySelector(".pokemons")
    new PokemonsComponent(pokemonsSection, 0)
    // const pokemonsList = document.querySelector(".pokemons-list");
    // new PokemonComponent(pokemonsList, "pokemon", getPokemonSearched);
    // new ButtonComponent(
    //   pokemonsList,
    //   "search-btn",
    //   "",
    //   "search",
    //   bufferNextPokemons
    // );
  }
}

export default AppComponent;
