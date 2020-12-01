import { DEFAULT_IMAGE_URL } from '../constants/statics';
import getArticleDate from './get-article-date';

export default function transformArticlesData (articles, key) {
  return articles.map((article) => {
    !article.urlToImage
      ? article.urlToImage = DEFAULT_IMAGE_URL
      : article.urlToImage;

    article.description.includes('</')
      ? article.description = article.description.replace(/(<[a-z/]*>)*/g, '')
      : article.description;

    article.publishedAt = getArticleDate(article.publishedAt);

    return {
      keyword: key,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage
    };
  });
}
