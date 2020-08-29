import {Component, OnInit} from '@angular/core';
import {CardModel, CardState, CardType} from '../../shared/models/card.model';
import {ApiService} from '../../sdk/api-service.service';
import {Router} from '@angular/router';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public cards: CardModel[] = [];
  public currentCard: CardModel;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cardService: CardService)
  { }

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
        return 'Читать';
      case CardState.Closed:
        return 'Закрыто';
      case CardState.Completed:
        return 'Перечитать';
    }
  }

  isClosedCard(state: CardState): boolean {
    return state === CardState.Closed;
  }

  getCardType(type: CardType): string {
    return CardType[type];
  }

  async onStartClicked(card: CardModel): Promise<void> {
    if (card.state === CardState.Available || card.state === CardState.Completed) {
      this.cardService.setCard(card);

      await this.router.navigateByUrl('launch', {state: {type: card.type}});
    }
  }
}
