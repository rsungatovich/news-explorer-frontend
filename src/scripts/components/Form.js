export default class Form {
  constructor(props) {
    this.forms = props.forms;
    this.submits = props.submits;
    this.messages = props.messages;
    this.errorMessages = props.errorMessages;
    this.showMessageClass = props.showMessageClass;
    this._addListeners();
  }

  clear = () => {
    this.forms.forEach((form) => form.reset());
    this.messages.forEach((mes) => mes.classList.remove(this.showMessageClass));
    this.submits.forEach((submit) => submit.setAttribute('disabled', true));
  }

  setServerError = () => {

  }

  _findMessage = (e) => {
    this.currentMessage = this.messages.find((mes) => {
      return mes.id.toLowerCase().includes(e.target.id.toLowerCase());
    })
  }

  _validateInputElement = (e) => {
    if (e.target.validity.valueMissing) {
      this.currentMessage.textContent = this.errorMessages.required;
      this.currentMessage.classList.add(this.showMessageClass);
    } else if (e.target.validity.tooShort) {
      this.currentMessage.textContent = this.errorMessages.short;
      this.currentMessage.classList.add(this.showMessageClass);
    } else if (e.target.validity.typeMismatch) {
      this.currentMessage.textContent = this.errorMessages.email;
      this.currentMessage.classList.add(this.showMessageClass);
    } else {
      this.currentMessage.textContent = '';
      this.currentMessage.classList.remove(this.showMessageClass);
    }
  }

  _validateForm = (form) => {
    this.submits.forEach((submit) => {
      submit.id.includes(form.id) && form.checkValidity()
        ? submit.removeAttribute('disabled')
        : submit.setAttribute('disabled', true)
    })
  }

  _getInfo = () => {

  }

  _addListeners = () => {
    this.forms.forEach((form) => {
      form.addEventListener('input', (e) => {
        this._findMessage(e);
        this._validateInputElement(e);
        this._validateForm(e.target.parentElement);
      })
      form.addEventListener('submit', (e) => e.preventDefault());
    })
  }
}
