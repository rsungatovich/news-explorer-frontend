import '../pages/index.css';

import * as nodes from '../scripts/constants/nodes';
import * as statics from '../scripts/constants/statics';
import getArticlesStatistic from '../scripts/utils/get-articles-statistic';

import MainApi from '../scripts/api/MainApi';
import Header from '../scripts/components/Header';
import NewsCard from '../scripts/components/NewsCard';
import NewsCardList from '../scripts/components/NewsCardList';
import PageState from '../scripts/components/PageState';

(function () {
  const pageState = new PageState();

  const header = new Header({
    menu: nodes.MENU,
    openBar: nodes.OPEN_BAR,
    closeBar: nodes.CLOSE_BAR,
    mobileLogo: nodes.MOBILE_LOGO,
    articlesLink: nodes.ARTICLES_LINK,
    logoutButton: nodes.LOGOUT_BUTTON,
    noScrollClass: statics.NO_SCROLL_CLASS,
    isHiddenClass: statics.IS_HIDDEN_CLASS,
    isVisibleClass: statics.IS_VISIBLE_CLASS,
    menuIsOpenClass: statics.MENU_IS_OPEN_CLASS,

    userNameBind: nodes.USER_NAME_BIND,
    mainKeywordsBind: nodes.MAIN_KEYWORDS_BIND,
    countArticlesBind: nodes.COUNT_ARTICLES_BIND,
    secondaryKeywordsBind: nodes.SECONDARY_KEYWORDS_BIND,
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

  const useLabel = (data) => {
    mainApi.removeArticle(data.body._id)
      .then(() => data.removeCard())
      .catch((err) => console.log(err));
  }

  const updateState = (res) => {
    pageState.setUserData(res.data);
    header.render(pageState.getUserData());
    pageState.getCardInstances().forEach((instance) => instance.update(pageState.getAuthState()));
  }

  const logoutHandler = () => {
    mainApi.logout()
      .then(() => {
        updateState({ isLoggedIn: false })
      })
      .catch((err) => console.log(err))
  }

  const getUserData = () => {
    let articles;
    const cards = [];

    mainApi.getUserData()
      .then((res) => {
        pageState.setUserData(res.data);

        mainApi.getArticles()
          .then((res) => {
            articles= res;

            articles.data.forEach((article) => {
              const instance = new NewsCard(article);
              cards.push(instance.create(true, true));
              instance.setHandlers(useLabel)
            })

            pageState.setArticlesData(articles.data);
            newsCardList.renderResults(cards, cards.length);
          })
          .catch((err) => console.log(err))
          .finally(() => header.render(pageState.getUserData(), getArticlesStatistic(articles ? articles.data : [])))

      })
      .catch((err) => console.log(err))
  }

  nodes.LOGOUT_BUTTON.addEventListener('click', logoutHandler);

  getUserData();

}())
