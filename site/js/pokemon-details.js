const pokemonName = (window.location.href).split("=")[1];
const { body } = document;
const p = document.createElement("p");
body.append(p)
p.textContent = pokemonName
