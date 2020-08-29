import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CardCheck, CardType} from '../../shared/models/card.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-check-dialog',
  templateUrl: './check-dialog.component.html',
  styleUrls: ['./check-dialog.component.scss']
})
export class CheckDialogComponent implements OnInit {
  public cardType: CardType;
  public checks: CardCheck[];
  public selected: CardCheck[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) {
    this.checks = data.checks;
    this.cardType = data.type;
  }

  ngOnInit(): void {

  }

  async check(): Promise<void> {
    if (this.compareAnswers()) {
      await this.router.navigateByUrl('/success', {state: {type: this.cardType}});
    } else {
      await this.router.navigateByUrl('/failure', {state: {type: this.cardType}});
    }
  }

  compareAnswers(): boolean {
    const numberOfTrue = this.checks.filter(check => check.isTrue).length;
    if (numberOfTrue === this.selected.length) {
      for (const check of this.selected) {
        if (!check.isTrue) {
          return false;
        }
      }
      return true;
    }

    return false;
  }

}
