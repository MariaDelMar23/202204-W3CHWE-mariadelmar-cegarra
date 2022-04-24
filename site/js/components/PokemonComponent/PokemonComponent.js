import Component from "../Component.js";

class PokemonComponent extends Component {
  pokemon;
  constructor(parentElement, className, pokemon) {
    super(parentElement, "li", className);
    this.pokemon = pokemon;
    this.element.addEventListener("click", ()=>{
      window.location.href = `pokemon-details?pokemonName=${pokemon.name}`;
    })
    this.render(pokemon)
  }

  render(pokemon) {
    this.element.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-img">
    <h3 class="pokemon-name">${pokemon.name}</h3>
    <i class="pokemon-type">${pokemon.types.length === 2 ? `${pokemon.types[0].type.name  } ${  pokemon.types[1].type.name}` : pokemon.types[0].type.name}</i>
    <p class="pokemon-experience">${pokemon.base_experience}</p>
    `;
  }


}

export default PokemonComponent;
