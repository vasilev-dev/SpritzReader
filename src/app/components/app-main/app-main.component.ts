import {Component, OnInit} from '@angular/core';
import {CardModel, CardState, CardType} from '../../shared/models/card.model';
import {ApiService} from '../../core/api-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {
  public cards: CardModel[] = [];
  public currentCard: CardModel;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCards().subscribe(data => {
      this.cards = data;
      this.currentCard = this.cards[0];
    });
  }

  getIconCardState(state: CardState): string {
    switch (state) {
      case CardState.Available:
        return 'lock_open';
      case CardState.Closed:
        return 'lock';
      case CardState.Completed:
        return 'done';
    }
  }

  getButtonStateText(state: CardState): string {
    switch (state) {
      case CardState.Available:
        return 'Start';
      case CardState.Closed:
        return 'Closed';
      case CardState.Completed:
        return 'Repeat';
    }
  }

  isClosedCard(state: CardState): boolean {
    return state === CardState.Closed;
  }

  getCardType(type: CardType): string {
    return CardType[type];
  }
}
