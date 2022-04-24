import { getApiObjectByUrl, getPokemons} from "../../pokeapi.js";
import PokemonComponent from "../PokemonComponent/PokemonComponent.js";

export const takePokemonsDeck = async (offSet) => {
  const pokemonsDeckUnordered = [];
  const pokemons = await getPokemons(offSet);
  await Promise.all(
    pokemons.results.map(async (pokemon) => {
      const pokemonData = await getApiObjectByUrl(pokemon.url);
      pokemonsDeckUnordered.push(pokemonData);
    })
  );
  return pokemonsDeckUnordered.sort(
    (pokemon1, pokemon2) => pokemon1.id - pokemon2.id
  );
};

export const printPokemonsCards = async (parentElement, clase, offSet) => {
  const pokemons = await takePokemonsDeck(offSet);

  pokemons.forEach((pokemon) => {
    new PokemonComponent(parentElement, clase, pokemon);
  });
};
