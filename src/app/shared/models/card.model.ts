export class CardModel {
  public title: string;
  public text: string;
  public type: CardType;
  public speed: number;
  public state: CardState;
  public pathToImage: string;
}

export enum CardType {
  Spritz,
  Rhythmic
}

export enum CardState {
  Available,
  Completed,
  Closed
}
