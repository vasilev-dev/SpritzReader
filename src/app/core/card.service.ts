import {Injectable} from '@angular/core';
import {CardModel} from '../shared/models/card.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cardSource = new BehaviorSubject<CardModel>(null);

  readingCard$ = this.cardSource.asObservable();

  setCard(card: CardModel): void{
    this.cardSource.next(card);
  }
}

