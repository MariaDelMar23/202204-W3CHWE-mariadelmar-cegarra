import Component from "../Component.js";
import { showDetails } from "./DetailsPokemonComponentUtils.js";

class DetailsPokemonComponent extends Component {
  pokemonName;

  constructor(parentElement, pokemonName) {
    super(parentElement, "section", "pokemon-details");
    this.pokemonName = pokemonName;
    this.render(pokemonName);
  }

  render(pokemonName) {
    showDetails(pokemonName)
  }
}

export default DetailsPokemonComponent;
