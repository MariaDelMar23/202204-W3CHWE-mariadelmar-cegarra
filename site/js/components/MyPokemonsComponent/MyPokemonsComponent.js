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
    <div class="modal">
      <p>El Pokemon ha sido añadido a "Mis Pokemon"</p>
    </div>
    <header class="main-header">
  <nav>
  <section><h1 class="main-title"><img src="images/pokemon-logo.svg" alt="Pokemon"></h1></section>
    <a href="myPokemon.html">Mis Pokémons</a>
    <a href='pokemon-details?pokemonId=${Math.floor(Math.random() * (898) + 1)}'>Pokémon Aleatorio</a>
  </nav>
</header>
    <main class="main"> 
      <section class="pokemons">
        <h2 class="section-title">Mis Pokémons</h2>
        <section class="display-pokemons"></section>
      </section>
    </main>`;
    const mainTitleSection = document.querySelector(".main-title");
    mainTitleSection.addEventListener("click", () => {
      window.location.href = `index`;
    });
    const displayPokemonsSection = document.querySelector(".display-pokemons");
    const ul = document.createElement("ul")
    ul.className = "pokemons-list row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 list-unstyled"
    displayPokemonsSection.append(ul)
    printPokemonsCards(ul, "pokemon__card", 1, true);
  }
}

export default MyPokemonsComponent;
