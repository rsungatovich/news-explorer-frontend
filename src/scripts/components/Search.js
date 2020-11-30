export default class Search {
  constructor(props) {
    this.form = props.form;
    this.input = props.input;
    this.messageText = props.messageText;
    this._addListeners();
    this._setValidateMessage();
  }

  _setValidateMessage = () => {
    this.input.setCustomValidity(this.messageText);
  }

  _addListeners = () => {
    this.form.addEventListener('input', () => {
      this.input.validity.valueMissing
        ? this.input.setCustomValidity(this.messageText)
        : this.input.setCustomValidity('');
    });
    this.form.addEventListener('submit', (e) => e.preventDefault());
  }
}
