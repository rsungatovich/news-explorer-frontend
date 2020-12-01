import BaseComponent from './BaseComponent';

export default class NewsCardList extends  BaseComponent {

  constructor(props) {
    super();

    this.count = 3;
    this.cards = null;
    this.cardsPlace = props.cardsPlace;
    this.cardsLoader = props.cardsLoader;
    this.isHiddenClass = props.isHiddenClass;
    this.showMoreButton = props.showMoreButton;

    this.setListeners({
      event: 'click',
      handler: this._showMore,
      element: this.showMoreButton,
    });
  }

  renderResults = (cards, count) => {
    this.count = count;
    this.cards = cards;
    this.cardsPlace.innerHTML = '';

    cards
      .filter((card, index) => index < count)
      .forEach((card) => this._addCard(card));
  }

  renderLoader = () => {
    this.cardsLoader.classList.toggle(this.isHiddenClass);
  }

  renderContent = (element) => {
    element.classList.remove(this.isHiddenClass);
  }

  resetContent = (elements = []) => {
    this.showMoreButton.removeAttribute('disabled');
    elements.forEach((el) => el.classList.add(this.isHiddenClass));
  }

  _showMore = () => {
    this.count += 3;
    this.renderResults(this.cards, this.count)

    this.count < this.cards.length
      ? this.showMoreButton.removeAttribute('disabled')
      : this.showMoreButton.setAttribute('disabled', true);
  }

  _addCard = (card) => {
    this.cardsPlace.append(card);
  }
}
