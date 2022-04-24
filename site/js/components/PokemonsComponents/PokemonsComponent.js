import { printPokemonsCards } from "../../pokeapi.js";
import Component from "../Component.js";
 
class PokemonsComponent extends Component {
  constructor(parentElement, offSet) {
    super(parentElement, "ul", "pokemons-list");

    const ul = document.querySelector(".pokemons-list");

    printPokemonsCards(ul, "pokemon__card", offSet);
  }
}

export default PokemonsComponent;
