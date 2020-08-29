import {Component, OnInit} from '@angular/core';
import {CardModel} from '../../shared/models/card.model';
import {CardService} from '../../core/card.service';
import splitToWords from 'split-to-words';

@Component({
  selector: 'app-spritz',
  templateUrl: './spritz.component.html',
  styleUrls: ['./spritz.component.scss']
})
export class SpritzComponent implements OnInit {
  card: CardModel;
  words: string[];
  currentWordIndex: number;
  msPerWord: number;
  readingStarted: boolean;

  leftChars: string;
  centerChar: string;
  rightChars: string;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.readingCard$.subscribe(card => {
      this.card = card;
    });
    this.words = splitToWords(this.card.text);
    this.msPerWord = this.calculateMsPerWord(this.card.speed);
    this.currentWordIndex = 0;
    this.readingStarted = false;
  }

  calculateMsPerWord = (wordPerMinute: number): number => 60 / wordPerMinute * 1000;

  async startReading(): Promise<void> {
    this.readingStarted = true;
    console.log(this.card.text);

    for (const index of this.words.keys()) {
      const centerIndex = Math.floor(this.words[index].length / 2);
      this.leftChars = this.words[index].slice(0, centerIndex);
      this.centerChar = this.words[index].charAt(centerIndex);
      this.rightChars = this.words[index].slice(centerIndex + 1);

      await this.sleep(this.msPerWord);
    }

    this.readingStarted = false;
  }

  async sleep(ms): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
