import './pages/index.css';
import * as CONSTANTS from './scripts/constants/constants'
import NewsApi from './scripts/api/NewsApi';
import MainApi from './scripts/api/MainApi';
import Form from "./scripts/components/Form";
import Popup from "./scripts/components/Popup";
import Header from "./scripts/components/Header";
import NewsCard from './scripts/components/NewsCard';
import NewsCardList from './scripts/components/NewsCardList';
import BaseComponent from './scripts/components/BaseComponent';
import Search from "./scripts/components/Search";

const form = new Form({
  forms: CONSTANTS.FORM_ITEMS.forms,
  submits: CONSTANTS.FORM_ITEMS.submits,
  messages: CONSTANTS.FORM_ITEMS.messages,
  errorMessages: CONSTANTS.ERROR_MESSAGES,
  showMessageClass: CONSTANTS.SHOW_MESSAGE_CLASS,
});

const popup = new Popup({
  clearForm: form.clear,
  popup: CONSTANTS.POPUP,
  formItems: CONSTANTS.FORM_ITEMS,
  openButton: CONSTANTS.POPUP_OPEN,
  closeButton: CONSTANTS.POPUP_CLOSE,
  defaultForm: CONSTANTS.DEFAULT_FORM,
  isHiddenClass: CONSTANTS.IS_HIDDEN_CLASS,
});

const search = new Search({
  form: CONSTANTS.SEARCH_ITEMS.form,
  input: CONSTANTS.SEARCH_ITEMS.input,
  messageText: CONSTANTS.ERROR_MESSAGES.search,
})
