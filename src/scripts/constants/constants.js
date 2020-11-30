const DEFAULT_FORM = 'auth';
const IS_HIDDEN_CLASS = 'is-hidden';
const SHOW_MESSAGE_CLASS = 'form__message_is-visible';

const ERROR_MESSAGES = {
  required: 'Это обязательное поле',
  email: 'Неправильный формат email',
  short: 'Должно быть от 2 до 30 символов',
  auth: 'Такой пользователь уже есть',
  login: 'Неправильная почта или пароль',
  search: 'Нужно ввести ключевое слово',
}

const POPUP = document.querySelector('#popup');
const POPUP_OPEN = document.querySelector('#popup-open');
const POPUP_CLOSE = document.querySelector('#popup-close');

const SEARCH_ITEMS = {
  form: document.querySelector('#search'),
  input: document.querySelector('#searchInput'),
  submit: document.querySelector('#searchSubmit'),
};

const FORM_ITEMS = {
  forms: [
    document.querySelector('#auth'),
    document.querySelector('#login'),
    document.querySelector('#auth-success'),
  ],
  inputs: [
    document.querySelector('#name'),
    document.querySelector('#email'),
    document.querySelector('#password'),
    document.querySelector('#createEmail'),
    document.querySelector('#createPassword'),
  ],
  links: [
    document.querySelector('#auth-link'),
    document.querySelector('#login-link'),
    document.querySelector('#login-link-second'),
  ],
  messages: [
    document.querySelector('#authFormMessage'),
    document.querySelector('#loginFormMessage'),
    document.querySelector('#emailMessage'),
    document.querySelector('#passwordMessage'),
    document.querySelector('#createNameMessage'),
    document.querySelector('#createEmailMessage'),
    document.querySelector('#createPasswordMessage'),
  ],
  submits: [
    document.querySelector('#authSubmit'),
    document.querySelector('#loginSubmit'),
  ]
};

export {
  POPUP,
  FORM_ITEMS,
  POPUP_OPEN,
  POPUP_CLOSE,
  SEARCH_ITEMS,
  DEFAULT_FORM,
  ERROR_MESSAGES,
  IS_HIDDEN_CLASS,
  SHOW_MESSAGE_CLASS,
}


