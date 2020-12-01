import BaseComponent from './BaseComponent';

export default class NewsCard extends  BaseComponent {

  static icons = [
    `<svg class="card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
     <path stroke-width="2" d="M11.382 15.714L6 19.942V4h12v15.942l-5.382-4.228-.618-.486-.618.486z"/></svg>`,
    `<svg class="card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
     <path d="M15 3H9v2H3v2h18V5h-6V3zM5 9v11a2 2 0 002 2h10a2 2 0 002-2V9h-2v11H7V9H5zm4 0v9h2V9H9zm4 0v9h2V9h-2z"/></svg>`
  ]

  constructor(data) {
    super();

    this.data = data;
    this.cardId = null;
    this.selected = false;
    this.isLoggedIn = false;
    this.inCollection = false;
  }

  setId = (id) => {
    this.cardId = id;
  }

  remove = () => {
    this.card.remove();
  }

  select = () => {
    if (this.isLoggedIn && !this.inCollection) {
      this.label.classList.toggle('label_is-selected');

      return this.selected = !this.selected;
    }
  }

  update = (isLoggedIn, inCollection) => {
    this.isLoggedIn = isLoggedIn;
    this.inCollection = inCollection;

    this._renderIcons()
  }

  setHandlers = (useLabel) => {
    this.setListeners({
      event: 'click',
      element: this.label,
      handler: () => {
        useLabel({
          id: this.cardId,
          body: this.data,
          setCardId: this.setId,
          selectCard: this.select,
          removeCard: this.remove,
        })
      },
    });
  }

  create = (isLoggedIn, inCollection) => {
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.cardTemplate = `
                        <div id="card-label" class="label card__label"></div>
                        <div id="card-tag" class="label card__label">
                        <span class="card__tag">${this.data.keyword}</span>
                        </div>
                        <img class="card__image" src="${this.data.image}" alt="Картинка из статьи">
                        <a class="card__about" href="${this.data.link}" target="_blank">
                        <time class="card__date">${this.data.date}</time>
                        <h4  class="card__title">${this.data.title}</h4>
                        <p class="card__description">${this.data.text}</p>
                        <cite class="card__source">${this.data.source}</cite>
                        </a>`

    this.card.insertAdjacentHTML('beforeend', this.cardTemplate);
    this.label = this.card.querySelector('#card-label');
    this.tag = this.card.querySelector('#card-tag');

    this.update(isLoggedIn, inCollection);

    return this.card;
  }

  _renderIcons = () => {
    this.label.innerHTML = '';

    if (this.inCollection) {
      this.tag.classList.remove('is-hidden');
      this.label.classList.add('label_type_remove');
      this.label.insertAdjacentHTML('beforeend', NewsCard.icons[1]);
    } else {
      this.tag.classList.add('is-hidden');
      this.label.classList.remove('label_type_remove');
      this.label.insertAdjacentHTML('beforeend', NewsCard.icons[0]);
    }

    this.isLoggedIn
      ? this.label.classList.remove('label_type_not-available')
      : this.label.classList.add('label_type_not-available');
  }
}
