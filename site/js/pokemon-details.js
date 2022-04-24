import DetailsPokemonComponent from "./components/DetailsPokemonComponent/DetailsPokemonComponent.js";

const pokemonName = (window.location.href).split("=")[1];

const { body } = document;
new DetailsPokemonComponent(body, pokemonName);
