import Component from "../Component.js";

class PokemonComponent extends Component {
  pokemon;
  constructor(parentElement, className, pokemon) {
    super(parentElement, "li", className);
    this.pokemon = pokemon;
  }

  render(pokemon) {
    this.element.innerHTML = `
    <img src="${pokemon.url}" alt="${pokemon.name}" class="pokemon-img">
    <h3 class="pokemon-name">${pokemon.name}</h3>
    <i class="pokemon-type">${pokemon.experience}</i>
    <p class="pokemon-experience">${pokemon.experience}</p>
    `;
  }
}

export default PokemonComponent;
