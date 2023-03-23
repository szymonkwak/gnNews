export interface GeneralState {
  newsDisplayStyle: NewsDisplay;
  language: string;
}

export enum NewsDisplay {
  list = 'list',
  grid = 'grid',
}

export enum Languages {
  PL = 'pl',
  ENG = 'en',
}
