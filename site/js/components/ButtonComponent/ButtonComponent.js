import Component from "../Component.js";

class ButtonComponent extends Component {
  iconClassName;

  constructor(parentElement, className, iconClassName, action) {
    super(parentElement, "button", className);
    this.iconClassName = iconClassName;
    this.element.addEventListener("click", action);
    this.render()
  }

  render() {
    this.element.innerHTML = `
    <i class="${this.iconClassName}"></i>
    `;
  }
}

export default ButtonComponent;
