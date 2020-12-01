import './pages/index.css';

import * as nodes from './scripts/constants/nodes';
import * as statics from './scripts/constants/statics';
import transformFormData from './scripts/utils/transform-form-data';
import transformArticlesData from './scripts/utils/transform-articles-data';

import NewsApi from './scripts/api/NewsApi';
import MainApi from './scripts/api/MainApi';
import Form from './scripts/components/Form';
import Popup from './scripts/components/Popup';
import Search from './scripts/components/Search';
import Header from './scripts/components/Header';
import NewsCard from './scripts/components/NewsCard';
import NewsCardList from './scripts/components/NewsCardList';
import PageState from './scripts/components/PageState';
import BaseComponent from "./scripts/components/BaseComponent";

(function () {
  const base = new BaseComponent();

  const pageState = new PageState();

  const form = new Form({
    forms: nodes.FORMS,
    submits: nodes.FORMS_SUBMITS,
    messages: nodes.FORMS_MESSAGES,
    errorsText: statics.ERROR_MESSAGES,
    shownClass: statics.SHOW_MESSAGE_CLASS
  });

  const popup = new Popup({
    popup: nodes.POPUP,
    forms: nodes.FORMS,
    formsLinks: nodes.FORMS_LINKS,
    isHiddenClass: statics.IS_HIDDEN_CLASS,
  });

  const header = new Header({
    menu: nodes.MENU,
    openBar: nodes.OPEN_BAR,
    closeBar: nodes.CLOSE_BAR,
    mobileLogo: nodes.MOBILE_LOGO,
    isMainPage: statics.IS_MAIN_PAGE,
    articlesLink: nodes.ARTICLES_LINK,
    signupButton: nodes.SIGNUP_BUTTON,
    logoutButton: nodes.LOGOUT_BUTTON,
    noScrollClass: statics.NO_SCROLL_CLASS,
    isHiddenClass: statics.IS_HIDDEN_CLASS,
    isVisibleClass: statics.IS_VISIBLE_CLASS,
    menuIsOpenClass: statics.MENU_IS_OPEN_CLASS,
  });

  const search = new Search({
    form: nodes.SEARCH_FORM,
    input: nodes.SEARCH_INPUT,
    errorMessages: statics.ERROR_MESSAGES,
  });

  const newsCardList = new NewsCardList({
    cardsPlace: nodes.CARDS_PLACE,
    cardsLoader: nodes.CARDS_LOADER,
    showMoreButton: nodes.SHOW_MORE_BUTTON,
    isHiddenClass: statics.IS_HIDDEN_CLASS,
  });

  const mainApi = new MainApi({
    headers: statics.HEADERS,
    baseUrl: statics.BASE_URL,
  });

  const newsApi = new NewsApi(statics.NEWS_API_CONFIG);

  const loading = (load) => {
    if (load) {
      nodes.BODY.classList.toggle('is-loading');
      nodes.PRELOADER.classList.toggle('is-hidden');
    }
  }

  const updateState = (res) => {
    pageState.setUserData(res.data);
    header.render(pageState.getUserData());
    pageState.getCardInstances().forEach((instance) => instance.update(pageState.getAuthState()));
  }

  const getUserData = (isLoading) => {
    loading(isLoading);

    mainApi.getUserData()
      .then((res) => updateState(res))
      .catch((err) => console.log(err))
      .finally(() => loading(isLoading));
  }

  const useLabel = (data) => {
    const isSelected = data.selectCard();

    if (isSelected) {
      mainApi.createArticle(data.body)
        .then((res) => data.setCardId(res.data._id))
        .catch(() => data.selectCard());

    } else if (!isSelected && pageState.getAuthState()) {
      mainApi.removeArticle(data.id)
        .then(() => data.setCardId(null))
        .catch(() => data.selectCard());
    }
  }

  const closePopupHandler = () => {
    form.clear();
    popup.close();
  }

  const openPopupHandler = (event) => {
    popup.setContent(event)
    popup.open();
  }

  const authorizationHandler = (event) => {
    event.preventDefault();
    mainApi.signup(transformFormData(event))
      .then(() => popup.setContent())
      .catch((err) => form.setServerError(err, 'authMessage'));
  }

  const loginHandler = (event) => {
    event.preventDefault();

    mainApi.signin(transformFormData(event))
      .then(() => {
        form.clear();
        popup.close();
        getUserData(false);
      })
      .catch((err) => form.setServerError(err, 'loginMessage'));
  }

  const logoutHandler = () => {
    mainApi.logout()
      .then(() => {
        updateState({ isLoggedIn: false })
      })
      .catch((err) => console.log(err))
  }

  const searchHandler = (event) => {
    event.preventDefault();

    newsCardList.renderLoader();
    newsCardList.resetContent([
      nodes.CARDS_NOT_FOUND,
      nodes.CARDS_CONTAINER,
      nodes.CARDS_ERROR_MESSAGE,
    ]);

    const key = nodes.SEARCH_INPUT.value;

    newsApi.getNews(key)
      .then((res) => {
        if (res.articles.length) {
          const cards = [];
          const articles = transformArticlesData(res.articles, key);
          const instances = articles.map((data) => new NewsCard(data));

          instances.forEach((instance) => {
            cards.push(instance.create(pageState.getAuthState()))
            instance.setHandlers(useLabel);
          });

          newsCardList.renderResults(cards, statics.DEFAULT_CARDS_COUNT);
          newsCardList.renderContent(nodes.CARDS_CONTAINER);
          pageState.setCardInstances(instances);
        } else {
          newsCardList.renderContent(nodes.CARDS_NOT_FOUND);
        }
      })
      .catch(() => newsCardList.renderContent(nodes.CARDS_ERROR_MESSAGE))
      .finally(() => newsCardList.renderLoader());
  }

  base.setListeners([
    {
      event: 'click',
      handler: closePopupHandler,
      element: nodes.POPUP_CLOSE,
    },
    {
      event: 'click',
      handler: openPopupHandler,
      element: nodes.SIGNUP_BUTTON,
    },
    {
      event: 'submit',
      handler: authorizationHandler,
      element: nodes.AUTH_FORM,
    },
    {
      event: 'submit',
      handler: loginHandler,
      element: nodes.LOGIN_FORM,
    },
    {
      event: 'submit',
      handler: searchHandler,
      element: nodes.SEARCH_FORM,
    },
    {
      event: 'click',
      handler: logoutHandler,
      element: nodes.LOGOUT_BUTTON,
    }
  ])

  getUserData(true);
}());
