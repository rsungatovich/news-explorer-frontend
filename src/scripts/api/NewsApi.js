export default class NewsApi {
  constructor(props) {
    this.date = props.date;
    this.lang = props.lang;
    this.apiKey = props.apiKey;
    this.apiUrl = props.apiUrl;
    this.pageSize = props.pageSize;
  }

  getNews(word) {
    const configUrl = [
      this.apiUrl,
      `?q=${word}`,
      `&from=${this.date.fromDate}`,
      `&to=${this.date.toDate}`,
      `&language=${this.lang}`,
      '&sortBy=publishedAt',
      `&pageSize=${this.pageSize}`,
      `&apiKey=${this.apiKey}`,
    ].join('')
    return fetch(configUrl)
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((err) => Promise.reject(err))
      })
  }
}
