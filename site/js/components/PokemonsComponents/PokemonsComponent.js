
import Component from "../Component.js";
import { printPokemonsCards } from "./PokemonsComponentUtils.js";
 
class PokemonsComponent extends Component {
  constructor(parentElement, offSet) {
    super(parentElement, "ul", "pokemons-list row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 list-unstyled");

    const ul = document.querySelector(".pokemons-list");

    printPokemonsCards(ul, "pokemon__card", offSet, false);
  }

}

export default PokemonsComponent;
