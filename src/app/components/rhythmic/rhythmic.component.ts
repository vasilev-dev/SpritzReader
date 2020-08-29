import { Component, OnInit } from '@angular/core';
import {CardService} from '../../services/card.service';
import {CardModel} from '../../shared/models/card.model';
import {CommonService} from '../../services/common.service';
import {CheckDialogComponent} from '../check-dialog/check-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-rhythmic',
  templateUrl: './rhythmic.component.html',
  styleUrls: ['./rhythmic.component.scss']
})
export class RhythmicComponent implements OnInit {
  card: CardModel;
  chars: string[];
  currentIndexChar: number;
  msPerChars: number;
  isLetterOrDigitRegExp: RegExp = new RegExp(/^[a-z0-9а-я]+$/i);

  constructor(
    private cardService: CardService,
    private commonService: CommonService,
    private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.cardService.readingCard$.subscribe(card => {
      this.card = card;
    });
    this.chars = this.card.text.split('');
    this.msPerChars = this.cardService.calculateMsPerChars(this.card.speed);
    await this.startReading();
  }

  async startReading(): Promise<void> {
    for (const index of this.chars.keys()) {
      this.currentIndexChar = index;
      await this.commonService.sleep(this.msPerChars);
    }
    this.openCheckDialog();
  }

  spanStyle(index: number): any {
    return {
      background: index === this.currentIndexChar && this.isLetterOrDigitRegExp.test(this.chars[index]) ? '#ffff00' : 'white',
    };
  }

  openCheckDialog(): void {
    this.dialog.open(CheckDialogComponent, {
      disableClose: true,
      width: '650px',
      data: { checks: this.card.checks, type: this.card.type }
    });
  }
}
