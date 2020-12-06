const ARTICLES_LINK = document.querySelector('#articles-link');
const SIGNUP_BUTTON = document.querySelector('#signup-button');
const LOGOUT_BUTTON = document.querySelector('#logout-button');
const POPUP_CLOSE = document.querySelector('#popup-close');

const POPUP = document.querySelector('#popup');
const AUTH_FORM = document.querySelector('#auth');
const LOGIN_FORM = document.querySelector('#login');

const SEARCH_FORM = document.querySelector('#search');
const SEARCH_INPUT = document.querySelector('#searchInput');

const MENU = document.querySelector('#menu');
const OPEN_BAR = document.querySelector('#open-bar');
const CLOSE_BAR = document.querySelector('#close-bar');
const MOBILE_LOGO = document.querySelector('#mobile-logo');

const CARDS_PLACE = document.querySelector('#cards-place');
const CARDS_LOADER = document.querySelector('#cards-loader');
const CARDS_CONTAINER = document.querySelector('#cards-container');
const CARDS_NOT_FOUND = document.querySelector('#cards-not-found');
const SHOW_MORE_BUTTON = document.querySelector('#show-more-button');
const CARDS_ERROR_MESSAGE = document.querySelector('#cards-error-message');

const USER_NAME_BIND = document.querySelector('#user-name-bind');
const COUNT_ARTICLES_BIND = document.querySelector('#count-articles-bind');
const MAIN_KEYWORDS_BIND = document.querySelector('#main-keywords-bind');
const SECONDARY_KEYWORDS_BIND = document.querySelector('#secondary-keywords-bind');

const BODY = document.querySelector('body');
const PRELOADER = document.querySelector('#preloader');

const FORMS = [
  document.querySelector('#auth'),
  document.querySelector('#login'),
  document.querySelector('#auth-success')
];

const FORMS_SUBMITS = [
  document.querySelector('#authSubmit'),
  document.querySelector('#loginSubmit'),
];

const FORMS_LINKS = [
  document.querySelector('#auth-link'),
  document.querySelector('#login-link'),
  document.querySelector('#success-link'),
];

const FORMS_MESSAGES = [
  document.querySelector('#authMessage'),
  document.querySelector('#loginMessage'),
  document.querySelector('#emailMessage'),
  document.querySelector('#passwordMessage'),
  document.querySelector('#createNameMessage'),
  document.querySelector('#createEmailMessage'),
  document.querySelector('#createPasswordMessage'),
]

export {
  BODY,
  MENU,
  FORMS,
  POPUP,
  OPEN_BAR,
  CLOSE_BAR,
  AUTH_FORM,
  PRELOADER,
  LOGIN_FORM,
  POPUP_CLOSE,
  SEARCH_FORM,
  FORMS_LINKS,
  MOBILE_LOGO,
  CARDS_PLACE,
  CARDS_LOADER,
  SEARCH_INPUT,
  SIGNUP_BUTTON,
  FORMS_SUBMITS,
  ARTICLES_LINK,
  LOGOUT_BUTTON,
  FORMS_MESSAGES,
  USER_NAME_BIND,
  CARDS_NOT_FOUND,
  CARDS_CONTAINER,
  SHOW_MORE_BUTTON,
  MAIN_KEYWORDS_BIND,
  CARDS_ERROR_MESSAGE,
  COUNT_ARTICLES_BIND,
  SECONDARY_KEYWORDS_BIND,
}
