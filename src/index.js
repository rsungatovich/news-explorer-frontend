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

new Popup({
  popup: CONSTANTS.POPUP,
  formItems: CONSTANTS.FORM_ITEMS,
  openButton: CONSTANTS.POPUP_OPEN,
  closeButton: CONSTANTS.POPUP_CLOSE,
  defaultForm: CONSTANTS.DEFAULT_FORM,
  isHiddenClass: CONSTANTS.IS_HIDDEN_CLASS,
});

new Form({
  forms: CONSTANTS.FORM_ITEMS.forms,
  inputs: CONSTANTS.FORM_ITEMS.inputs,
});
