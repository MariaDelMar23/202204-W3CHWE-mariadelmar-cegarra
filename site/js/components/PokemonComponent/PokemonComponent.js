import { deletePokemon, sendPokemon } from "../../MyPokemonApi.js";
import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import Component from "../Component.js";

class PokemonComponent extends Component {
  pokemon;

  constructor(parentElement, className, pokemon, myPokemons) {
    super(parentElement, "li", `${className} id-${pokemon.id}`);
    this.pokemon = pokemon;
    this.render(pokemon, myPokemons)
  }

  render(pokemon, myPokemons) {
    this.element.innerHTML = `
    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" class="pokemon-img">
    <h3 class="pokemon-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
    <span class="pokemon-id">Nº ${pokemon.id}</span>`;
    if (pokemon.types.length >= 1){
      this.element.innerHTML += `<p class="pokemon-type--${pokemon.types[0].type.name}"></p>`
    }
    if (pokemon.types.length === 2){
      this.element.innerHTML += `<p class="pokemon-type--${pokemon.types[1].type.name}"></p>`
    }
    this.element.innerHTML += `
    <section class="buttons-card__${pokemon.id}"></section> 
    `;
    const buttonsSection = document.querySelector(`.buttons-card__${pokemon.id}`)
    const buttonAdd = new ButtonComponent(buttonsSection, "button-add", "", () => sendPokemon(pokemon))
    buttonAdd.innerHTML += `<img src="site/images/pokemon-catch.png" alt="Catch pokemon">`
    new ButtonComponent(buttonsSection, "button-details", "", ()=>{
      window.location.href = `pokemon-details?pokemonId=${pokemon.id}`;
    })
    if(myPokemons){
      new ButtonComponent(buttonsSection, "button-delete", "", () => {
        document.querySelector(`.id-${pokemon.id}`).remove()
        deletePokemon(pokemon.id)
      })
    }
    
  }


}

export default PokemonComponent;
