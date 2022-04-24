
import Component from "../Component.js";
import { printPokemonsCards } from "./PokemonsComponentUtils.js";
 
class PokemonsComponent extends Component {
  constructor(parentElement, offSet) {
    super(parentElement, "ul", "pokemons-list");

    const ul = document.querySelector(".pokemons-list");

    printPokemonsCards(ul, "pokemon__card", offSet, false);
  }

}

export default PokemonsComponent;
