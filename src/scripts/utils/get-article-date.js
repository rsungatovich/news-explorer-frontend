import { DATE_MONTHS } from "../constants/statics";

export default function getArticleDate (value) {
  const date = new Date(value);

  return `${date.getDate()} ${DATE_MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
}
