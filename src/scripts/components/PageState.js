export default class PageState {

  constructor() {
    this.userData = { isLoggedIn: false };
    this.currentCardInstances = [];
    this.articlesData = [];
  }

  getUserData = () => {
    return this.userData;
  }

  getArticlesData = () => {
    return this.articlesData;
  }

  getCardInstances = () => {
    return this.currentCardInstances;
  }

  getAuthState = () => {
    return this.userData.isLoggedIn;
  }

  setUserData = (data) => {
    this.userData = data ? { ...data, isLoggedIn: true } : { isLoggedIn: false };
  }

  setArticlesData = (data) => {
    this.articlesData = data;
  }

  setCardInstances = (instances) => {
    this.currentCardInstances = instances;
  }

}
