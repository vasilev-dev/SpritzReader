import {Component, OnInit} from '@angular/core';
import {CardModel} from '../../shared/models/card.model';
import splitToWords from 'split-to-words';
import {CardService} from '../../services/card.service';
import {CommonService} from '../../services/common.service';
import {MatDialog} from '@angular/material/dialog';
import {CheckDialogComponent} from '../check-dialog/check-dialog.component';

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

  leftChars: string;
  centerChar: string;
  rightChars: string;

  constructor(
    private cardService: CardService,
    private commonService: CommonService,
    private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.cardService.readingCard$.subscribe(card => {
      this.card = card;
    });

    this.words = splitToWords(this.card.text);
    this.msPerWord = this.cardService.calculateMsPerWord(this.card.speed);
    this.currentWordIndex = 0;
    await this.startReading();
  }

  async startReading(): Promise<void> {
    for (const index of this.words.keys()) {
      const centerIndex = Math.floor(this.words[index].length / 2);
      this.leftChars = this.words[index].slice(0, centerIndex);
      this.centerChar = this.words[index].charAt(centerIndex);
      this.rightChars = this.words[index].slice(centerIndex + 1);

      await this.commonService.sleep(this.msPerWord);
    }
    this.openCheckDialog();
  }

  openCheckDialog(): void {
    this.dialog.open(CheckDialogComponent, {
      disableClose: true,
      width: '650px',
      data: { checks: this.card.checks, type: this.card.type }
    });
  }
}
