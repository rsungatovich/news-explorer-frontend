export default class Popup {
  constructor(props) {
    this.popup = props.popup;
    this.clearForm = props.clearForm;
    this.forms = props.formItems.forms;
    this.links = props.formItems.links;
    this.openButton = props.openButton;
    this.closeButton = props.closeButton;
    this.defaultForm = props.defaultForm;
    this.isHiddenClass = props.isHiddenClass;
    this._addListeners();
  }

  _open = () => {
    this.popup.classList.remove(this.isHiddenClass);
  }

  _close = () => {
    this.popup.classList.add(this.isHiddenClass);
  }

  _setContent = (id) => {
    this.forms.forEach((form) => {
      id.toLowerCase().includes(form.id.toLowerCase())
        ? form.classList.remove(this.isHiddenClass)
        : form.classList.add(this.isHiddenClass);
    })
  }

  _addListeners = () => {
    this.closeButton.addEventListener('click', this._close);

    this.openButton.addEventListener('click', () => {
      this._setContent(this.defaultForm);
      this.clearForm();
      this._open()
    });

    this.links.forEach((link) => link.addEventListener('click', () => {
      this._setContent(link.id);
      this.clearForm();
    }));
  }
}
