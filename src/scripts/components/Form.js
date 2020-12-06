import BaseComponent from './BaseComponent';

export default class Form extends BaseComponent {
  constructor(props) {
    super();

    this.forms = props.forms;
    this.submits = props.submits;
    this.messages = props.messages;
    this.errorsText = props.errorsText;
    this.showMessageClass = props.shownClass;

    this.setListeners({
      event: 'input',
      element: this.forms,
      handler: this._validateInputElement,
    });
  }

  clear = () => {
    this.forms.forEach((form) => form.reset());
    this.messages.forEach((mes) => mes.classList.remove(this.showMessageClass));
    this.submits.forEach((submit) => submit.setAttribute('disabled', true));
  }

  setServerError = (err, id) => {
    const message = this.messages.find((item) => item.id === id);
    message.classList.add(this.showMessageClass);
    message.textContent = err.message;
  }

  _validateInputElement = (event) => {
    const input = event.target;
    const message = this.messages.find((item) => item.dataset.input === input.id);

    if (input.validity.valueMissing) {
      message.textContent = this.errorsText.required;
      message.classList.add(this.showMessageClass);
    } else if (input.validity.tooShort) {
      message.textContent = this.errorsText.short;
      message.classList.add(this.showMessageClass);
    } else if (input.validity.patternMismatch) {
      message.textContent = this.errorsText.email;
      message.classList.add(this.showMessageClass);
    } else {
      message.textContent = '';
      message.classList.remove(this.showMessageClass);
    }

    this._validateForm();
  }

  _validateForm = () => {
    this.submits.forEach((submit) => {
      submit.closest('form').checkValidity()
        ? submit.removeAttribute('disabled')
        : submit.setAttribute('disabled', true);
    })
  }
}
