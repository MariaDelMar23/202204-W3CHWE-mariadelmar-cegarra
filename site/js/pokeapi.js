const offSet = 0;
const limit = 20;
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
