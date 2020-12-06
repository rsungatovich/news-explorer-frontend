import BaseComponent from './BaseComponent';

export default class Popup extends  BaseComponent {
  constructor(props) {
    super();

    this.popup = props.popup;
    this.forms = props.forms;
    this.links = props.formsLinks;
    this.isHiddenClass = props.isHiddenClass;

    this.setListeners({
      event: 'click',
      element: this.links,
      handler: this.setContent,
    });
  }

  open = () => {
    this.popup.classList.remove(this.isHiddenClass);
  }

  close = () => {
    this.popup.classList.add(this.isHiddenClass);
  }

  setContent = (event) => {
    const formId = event ? event.target.dataset.form : 'auth-success';
    this.forms.forEach((item) => item.id === formId
      ? item.classList.remove(this.isHiddenClass)
      : item.classList.add(this.isHiddenClass));
  }
}
