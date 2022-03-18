export interface Link {
  uri: string;
  title: string;
}

export interface LinkState extends Link {
  state: string;
}