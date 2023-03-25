interface Article {
  author: string;
  content: unknown;
  description: unknown;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  name: string;
  urlToImage: string;
}

interface ResponseData {
  articles: Article[];
  status: string;
  totalResults: number;
}

export type { Article, ResponseData };
