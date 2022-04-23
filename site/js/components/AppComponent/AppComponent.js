import Component from "../Component.js";

class AppComponent extends Component {
  pokemons;

  constructor(parentElement) {
    super(parentElement, "div", "container");
  }

  render() {
    this.element.innerHTML = `<header class="main-header">
        <h1 class="main-title"><img src="site/images/pokemon-logo.svg" alt="Pokemon"></h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
        </section>
      </main>`;
  }
}

export default AppComponent;
