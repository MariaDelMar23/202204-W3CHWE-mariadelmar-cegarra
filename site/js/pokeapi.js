let offSet = 0;
let limit = 12;
const pokemonSearched = "bulbasaur";

export const getPokemons = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`
  );

  const pokemonsRequested = await response.json();
  return pokemonsRequested;
};

export const getPokemonSearched = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonSearched}`
  );

  const pokemonFound = await response.json();
  return pokemonFound;
};

export const bufferNextPokemons = async () => {
  offSet += 12;
  limit += 12;
  const pokemonData = await getPokemons(offSet, limit);
  return pokemonData;
};

export const getRelativeData = async (pokemonsPack12) => {
  pokemonsPack12.results.map((pokemon) => pokemon.name);
};

export const bufferPreviousPokemons = async () => {
  offSet -= 12;
  limit -= 12;
  const pokemonData = await getPokemons(offSet, limit);
  return pokemonData;
};
