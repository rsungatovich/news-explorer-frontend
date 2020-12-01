import BaseComponent from './BaseComponent';

export default class Search extends  BaseComponent {
  constructor(props) {
    super();

    this.form = props.form;
    this.input = props.input;
    this.errorMessage = props.errorMessages.search;

    this.setListeners({
      event: 'input',
      element: this.form,
      handler: this._checkValidity,
    });
    this._setValidateMessage();
  }

  _setValidateMessage = () => {
    this.input.setCustomValidity(this.errorMessage);
  }

  _checkValidity = () => {
    this.input.validity.valueMissing
      ? this.input.setCustomValidity(this.errorMessage)
      : this.input.setCustomValidity('');
  }
}
