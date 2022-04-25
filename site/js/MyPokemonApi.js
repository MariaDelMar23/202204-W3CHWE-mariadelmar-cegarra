const apiUrl = "https://quiet-retreat-95922.herokuapp.com/pokemon"

export const getMyPokemons = async () => {
  const response = await fetch(apiUrl);
  const pokemonsRequested = await response.json();
  return pokemonsRequested;
};

export const sendPokemon = async (pokemon) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });
  return response.json();
};

export const deletePokemon = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
};

export const editPokemon = async (id, pokemonEdited) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemonEdited),
  });
  
  return response.json();
};

export const getMyPokemonSearched = async (pokemonSearched) => {
  const response = await fetch(
    `${apiUrl}/${pokemonSearched}`
  );
  const pokemonFound = await response.json();
  return pokemonFound;
};
