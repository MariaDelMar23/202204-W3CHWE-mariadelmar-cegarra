import { allPokemonsObject } from "../../pokeapi.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component.js";
import PokemonsComponent from "../PokemonsComponents/PokemonsComponent.js";

class AppComponent extends Component {
  pokemons;
  offSet;

  constructor(parentElement) {
    super(parentElement, "div", "container");
    this.render();
  }

  render() {
    let offSet = 0;
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
          <h2 class="section-title">Todos los Pokémons</h2>
          <section class="display-pokemons"></section> 
        </section>
        <section class="buttons-info">
          <div class="buttons-info__left"></div>
          <p class="info-page">${offSet} - ${offSet + 12} / ${allPokemonsObject.count}</p>
          <div class="buttons-info__right"></div>
        </section>
      </main>
      `;

    const displayPokemonsSection = document.querySelector(".display-pokemons");
    const buttonsInfoLeft = document.querySelector(".buttons-info__left");
    const buttonsInfoRight = document.querySelector(".buttons-info__right");
    new PokemonsComponent(displayPokemonsSection, offSet);
    new ButtonComponent(
      buttonsInfoLeft,
      "button-next",
      "fa-solid fa-chevron-left",
      () => {
        document.querySelector(".pokemons-list").remove();
        offSet -= 12;
        document.querySelector(".info-page").textContent = `${offSet} - ${
          offSet + 12
        } / 898`;
        new PokemonsComponent(displayPokemonsSection, offSet);
      }
    );
    new ButtonComponent(
      buttonsInfoRight,
      "button-next",
      "fa-solid fa-chevron-right",
      () => {
        document.querySelector(".pokemons-list").remove();
        offSet += 12;
        document.querySelector(".info-page").textContent = `${offSet} - ${
          offSet + 12
        } / ${allPokemonsObject.count}`;
        new PokemonsComponent(displayPokemonsSection, offSet);
      }
    );
    const mainTitleSection = document.querySelector(".main-title");
    mainTitleSection.addEventListener("click", () => {
      window.location.href = `index`;
    });
  }
}

export default AppComponent;
