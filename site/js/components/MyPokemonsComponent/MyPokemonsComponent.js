import Component from "../Component.js";
import { printPokemonsCards } from "../PokemonsComponents/PokemonsComponentUtils.js";

class MyPokemonsComponent extends Component {
  pokemons;
  offSet;

  constructor(parentElement) {
    super(parentElement, "div", "container");
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <header class="main-header">
    <nav>
      <a href="myPokemon.html">My Pokemons</a>
      <section><h1 class="main-title"><img src="images/pokemon-logo.svg" alt="Pokemon"></h1></section>
      <a href='pokemon-details?pokemonId=${Math.floor(
        Math.random() * 1126 + 1
      )}'>Random Pokemon</a>
    </nav>
  </header>
      <main class="main"> 
        <section class="myPokemons">
          <h2 class="section-title">My Pokémons</h2>
          <section class="diplay-myPokemons"></section>
          <section class="buttons-info">
    </section>
    </section>
      </main>`;
    const mainTitleSection = document.querySelector(".main-title");
    mainTitleSection.addEventListener("click", () => {
      window.location.href = `index`;
    });

    const displayPokemonsSection = document.querySelector(".diplay-myPokemons");
    printPokemonsCards(displayPokemonsSection, "pokemon__card", 1, true);
  }
}

export default MyPokemonsComponent;
