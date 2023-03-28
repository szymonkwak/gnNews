interface Article {
  id: number;
  image: string;
  language: string;
  publish_date: string;
  source_country: string;
  text: string;
  title: string;
  url: string;
}

interface ResponseData {
  news: Article[];
  available: number;
  number: number;
  offset: number;
}

export type { Article, ResponseData };
