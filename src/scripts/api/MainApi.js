export default class MainApi {
  constructor(props) {
    this.baseUrl = props.baseUrl;
    this.headers = props.headers;
  }

  _getResolve = (res) => {
    if (res.ok) return res.json();
    return res.json().then((err) => Promise.reject(err))
  }

  signup = (body) => {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify(body),
    })
      .then((res) => this._getResolve(res))
      .catch((err) => { throw err });
  }

  signin = (body) => {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify(body),
    })
      .then((res) => this._getResolve(res))
      .catch((err) => { throw err });
  }

  logout = () => {
    return fetch(`${this.baseUrl}/logout`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
    })
      .then((res) => this._getResolve(res))
      .catch((err) => { throw err });
  }

  getUserData = () => {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers,
      credentials: 'include',
    })
      .then((res) => this._getResolve(res))
      .catch((err) => { throw err });
  }

  getArticles = () => {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      headers: this.headers,
      credentials: 'include',
    })
      .then((res) => this._getResolve(res))
      .catch((err) => { throw err });
  }

  createArticle = (body) => {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify(body),
    })
      .then((res) => this._getResolve(res))
      .catch((err) => { throw err });
  }

  removeArticle = (id) => {
    return fetch(`${this.baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
    })
      .then((res) => this._getResolve(res))
      .catch((err) => { throw err });
  }
}
