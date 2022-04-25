import Component from "../Component.js";
import { showDetails } from "./DetailsPokemonComponentUtils.js";

class DetailsPokemonComponent extends Component {
  pokemonName;

  constructor(parentElement, pokemonName) {
    super(parentElement, "div", "container");
    this.pokemonName = pokemonName;
    showDetails(pokemonName)
  }
}

export default DetailsPokemonComponent;
