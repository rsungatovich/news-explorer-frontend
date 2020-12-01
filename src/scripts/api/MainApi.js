export default class MainApi {
  constructor(props) {
    this.baseUrl = props.baseUrl;
    this.headers = props.headers;
  }

  _getResolve = (mes, res) => {
    if (res.ok) return res.json();
    return Promise.reject(`${mes} ${res.status}`);
  }

  signup(body) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'same-origin',
      body: JSON.stringify(body),
    })
      .then((res) => this._getResolve('', res));
  }

  signin(body) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'same-origin',
      body: JSON.stringify(body),
    })
      .then((res) => this._getResolve('', res));
  }

  logout() {
    return fetch(`${this.baseUrl}/logout`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'same-origin',
    })
      .then((res) => this._getResolve('', res));
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers,
      credentials: 'same-origin',
    })
      .then((res) => this._getResolve('', res));
  }

  getArticles() {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      headers: this.headers,
      credentials: 'same-origin',
    })
      .then((res) => this._getResolve('', res));
  }

  createArticle(body) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'same-origin',
      body: JSON.stringify(body),
    })
      .then((res) => this._getResolve('', res));
  }

  removeArticle(id) {
    return fetch(`${this.baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'same-origin',
    })
      .then((res) => this._getResolve('', res));
  }
}
