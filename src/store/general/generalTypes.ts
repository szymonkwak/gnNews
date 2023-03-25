export interface GeneralState {
  newsDisplayStyle: NewsDisplay;
  language: string;
  displayedArticles: number;
}

export enum NewsDisplay {
  list = 'list',
  grid = 'grid',
}

export enum Languages {
  PL = 'pl',
  ENG = 'en',
}
