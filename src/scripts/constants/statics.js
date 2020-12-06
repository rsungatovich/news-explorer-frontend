import getUrlDate from "../utils/get-url-date";

const IS_MAIN_PAGE = true;
const DEFAULT_CARDS_COUNT = 3;
const NO_SCROLL_CLASS = 'no-scroll';
const IS_HIDDEN_CLASS = 'is-hidden';
const IS_VISIBLE_CLASS = 'is-visible';
const MENU_IS_OPEN_CLASS = 'header__menu_is-open';
const SHOW_MESSAGE_CLASS = 'form__message_is-visible';
const DEFAULT_IMAGE_URL = 'https://static3.depositphotos.com/1004325/185/i/600/depositphotos_1853470-stock-photo-news.jpg';

const BASE_URL = 'https://api.chirikgaga.ga';
const HEADERS = { 'Content-Type': 'application/json' }

const DATE_MONTHS = [
  'Января','Февраля','Марта',
  'Апреля','Мая','Июня',
  'Июля','Августа','Сентября',
  'Октября', 'Ноября','Декабря',
];

const ERROR_MESSAGES = {
  required: 'Это обязательное поле',
  email: 'Неправильный формат email',
  short: 'Должно быть не менее 8 символов',
  auth: 'Такой пользователь уже есть',
  login: 'Неправильная почта или пароль',
  search: 'Нужно ввести ключевое слово',
}

const NEWS_API_CONFIG = {
  date: getUrlDate(),
  lang: 'ru',
  apiKey: 'a55db8c89ba247be8982b19a856f9680',
  apiUrl: 'https://nomoreparties.co/news/v2/everything',
  pageSize: 100,
}

export {
  HEADERS,
  BASE_URL,
  DATE_MONTHS,
  IS_MAIN_PAGE,
  ERROR_MESSAGES,
  NEWS_API_CONFIG,
  NO_SCROLL_CLASS,
  IS_HIDDEN_CLASS,
  IS_VISIBLE_CLASS,
  DEFAULT_IMAGE_URL,
  SHOW_MESSAGE_CLASS,
  MENU_IS_OPEN_CLASS,
  DEFAULT_CARDS_COUNT,
}
