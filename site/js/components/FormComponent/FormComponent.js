import Component from "../Component.js";

class FormComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "input", "search-pokemon");
    this.render()
  }
}
export default FormComponent;
