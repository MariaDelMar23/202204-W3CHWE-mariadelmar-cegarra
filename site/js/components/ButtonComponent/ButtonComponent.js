import Component from "../Component.js";

class ButtonComponent extends Component {
  src;
  alt;

  constructor(parentElement, className, src, alt, action) {
    super(parentElement, "button", className);
    this.src = src;
    this.alt = alt;
    this.element.addEventListener("click", action);
  }

  render() {
    this.element.innerHTML = `
      <img src="${this.src} " alt="${this.alt} ">
    `;
  }
}

export default ButtonComponent;
