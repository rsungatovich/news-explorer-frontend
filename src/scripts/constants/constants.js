const DEFAULT_FORM = 'login';
const IS_HIDDEN_CLASS = 'is-hidden';

const POPUP = document.querySelector('#popup');
const POPUP_OPEN = document.querySelector('#popup-open');
const POPUP_CLOSE = document.querySelector('#popup-close');
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
  ]
}

export {
  POPUP,
  FORM_ITEMS,
  POPUP_OPEN,
  POPUP_CLOSE,
  DEFAULT_FORM,
  IS_HIDDEN_CLASS,
}
