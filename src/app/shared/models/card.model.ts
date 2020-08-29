export class CardModel {
  public title: string;
  public text: string;
  public description: string;
  public type: CardType;
  public speed: number;
  public state: CardState;
  public pathToImage: string;
  public checks: CardCheck[];
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

export class CardCheck {
  public text: string;
  public isTrue: boolean;
}
