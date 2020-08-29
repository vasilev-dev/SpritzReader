import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CardType} from '../../shared/models/card.model';

@Component({
  selector: 'app-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.scss']
})
export class CheckResultComponent implements OnInit {
  public success: boolean;
  public cardType: CardType;

  constructor(private router: Router) {
    this.cardType = router.getCurrentNavigation().extras.state.type;
  }

  ngOnInit(): void {
    this.success = this.router.url === '/success';
  }

  async backToMenu(): Promise<void> {
    await this.router.navigateByUrl('/menu');
  }

  async repeat(): Promise<void> {
    if (this.cardType === CardType.Spritz) {
      await this.router.navigateByUrl('/spritz');
    } else {
      await this.router.navigateByUrl('/rhythmic');
    }
  }
}
