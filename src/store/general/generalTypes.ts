export interface GeneralState {
  newsDisplayStyle: NewsDisplayStyle;
  language: string;
}

export enum NewsDisplayStyle {
  list = 'list',
  grid = 'grid',
}
