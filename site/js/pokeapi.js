const limit = 12;
const pokemonSearched = ""

export const getPokemons = async (offSet) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`
  );
  const pokemonsRequested = await response.json();
  return pokemonsRequested;
};

export const getApiObjectByUrl = async (url) => {
  const response = await fetch(url);
  const ApiObjectByUrl = await response.json();
  return ApiObjectByUrl;
}

export const getPokemonSearched = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonSearched}`
  );
  const pokemonFound = await response.json();
  return pokemonFound;
};

export const bufferNextPokemons = async () => {
  const offSet =  12;
  const pokemonData = await getPokemons(offSet, limit);
  return pokemonData;
};

export const getRelativeData = async (pokemonsPack12) => {
  pokemonsPack12.results.map((pokemon) => pokemon.name);
};

export const bufferPreviousPokemons = async () => {
  const offSet =  12;
  const pokemonData = await getPokemons(offSet, limit);
  return pokemonData;
};
