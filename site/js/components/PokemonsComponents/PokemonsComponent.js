import {
  getApiObjectByUrl,
  getPokemons,
} from "../../pokeapi.js";
import Component from "../Component.js";


const takePokemonsDeck = async (offSet) => {
  const pokemonsDeckUnordered = []
  const pokemons = await getPokemons(offSet);
  await Promise.all(
    pokemons.results.map(async (pokemon) => {
      const pokemonData = await getApiObjectByUrl(pokemon.url);
      pokemonsDeckUnordered.push(pokemonData)
    })
  );
return pokemonsDeckUnordered;
};

class PokemonsComponent extends Component {
  constructor(parentElement, offSet) {
    super(parentElement, "ul", "pokemons-list");
    takePokemonsDeck(offSet);
  }
}


export default PokemonsComponent;
