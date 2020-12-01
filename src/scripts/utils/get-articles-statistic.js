export default function getArticlesStatistic(articles) {
  const keywords = {}
  const mainKeywords = [];
  const countArticles = articles.length;

  articles.forEach((article) => {
    keywords[article.keyword.toLowerCase()]
      ? keywords[article.keyword.toLowerCase()] += 1
      : keywords[article.keyword.toLowerCase()] = 1;
  });

  const allKeywords = Object.entries(keywords).sort((a, b) => b[1] - a[1]);
  const maxKeywords = allKeywords.length > 3 ? 3 : allKeywords.length;
  const difference = allKeywords.length - 2;

  for (let i = 0; i < 3; i++) {
    allKeywords[i]
      ? mainKeywords.push(allKeywords[i][0].replace(/^./, allKeywords[i][0][0].toUpperCase()))
      : mainKeywords.push(' ');
  }

  return {
    countArticlesBind: `${countArticles ? countArticles : 0}`,
    secondaryKeywordsBind: allKeywords.length > 3 ? `и ${difference}-м другим` : `${mainKeywords[2].trim() ? 'и ' + mainKeywords[2] : mainKeywords[2].trim()}`,
    mainKeywordsBind: maxKeywords <= 3 ? `${mainKeywords[1].trim() ? mainKeywords[0] + ', ' + mainKeywords[1] : mainKeywords[0]}` : `${mainKeywords.join(', ')}`,
  }
}
