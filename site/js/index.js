import AppComponent from "./components/AppComponent/AppComponent.js";
import { getPokemons } from "./pokeapi.js";

const { body } = document;

new AppComponent(body, getPokemons);
