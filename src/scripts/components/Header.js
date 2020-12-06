import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor(props) {
    super();

    this.menu = props.menu;
    this.openBar = props.openBar;
    this.closeBar = props.closeBar;
    this.mobileLogo = props.mobileLogo;
    this.isMainPage = props.isMainPage;
    this.articlesLink = props.articlesLink;
    this.signupButton = props.signupButton;
    this.logoutButton = props.logoutButton;
    this.noScrollClass = props.noScrollClass;
    this.isHiddenClass = props.isHiddenClass;
    this.isVisibleClass = props.isVisibleClass;
    this.menuIsOpenClass = props.menuIsOpenClass;

    this.userNameBind = props.userNameBind;
    this.mainKeywordsBind = props.mainKeywordsBind;
    this.countArticlesBind = props.countArticlesBind;
    this.secondaryKeywordsBind = props.secondaryKeywordsBind;

    this.setListeners([{
      event: 'click',
      element: this.openBar,
      handler: this._toggleBar,
    },{
      event: 'click',
      element: this.closeBar,
      handler: this._toggleBar,
    }]);
  }

  render = (userData, articlesData) => {
    if (userData.isLoggedIn) {
      this.logoutButton.prepend(userData.name);
      this.logoutButton.classList.remove(this.isHiddenClass);
      if (this.isMainPage) {
        this.signupButton.classList.add(this.isHiddenClass);
        this.articlesLink.classList.remove(this.isHiddenClass);
      } else {
        this.userNameBind.textContent = userData.name;
        this.mainKeywordsBind.textContent = articlesData.mainKeywordsBind;
        this.countArticlesBind.textContent = articlesData.countArticlesBind;
        this.secondaryKeywordsBind.textContent = articlesData.secondaryKeywordsBind;
      }
    } else {
      this.logoutButton.childNodes[0].remove();
      this.logoutButton.classList.add(this.isHiddenClass);
      if (this.isMainPage) {
        this.articlesLink.classList.add(this.isHiddenClass);
        this.signupButton.classList.remove(this.isHiddenClass);
      }
    }
  }

  _toggleLogo = () => {
    this.mobileLogo.classList.contains(this.isVisibleClass)
      ? this.mobileLogo.classList.remove(this.isVisibleClass)
      : setTimeout(() => this.mobileLogo.classList.toggle(this.isVisibleClass), 700)
  }

  _toggleBar = () => {
    this.menu.classList.toggle(this.menuIsOpenClass);
    this.openBar.classList.toggle(this.isHiddenClass);
    this.closeBar.classList.toggle(this.isHiddenClass);
    this.menu.closest('body').classList.toggle(this.noScrollClass);
    this._toggleLogo();
  }
}
