import {Injectable} from '@angular/core';
import {CardModel} from '../shared/models/card.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cardSource = new BehaviorSubject<CardModel>(null);
  private avgCharsInWord = 6;

  readingCard$ = this.cardSource.asObservable();

  setCard(card: CardModel): void{
    this.cardSource.next(card);
  }

  calculateMsPerWord = (wordPerMinute: number): number => 60 / wordPerMinute * 1000;
  calculateMsPerChars = (wordPerMinute: number): number => this.calculateMsPerWord(wordPerMinute) / this.avgCharsInWord;
}

