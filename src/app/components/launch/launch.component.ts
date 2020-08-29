import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CardType} from '../../shared/models/card.model';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  cardType: CardType;

  constructor(private router: Router) {
    this.cardType = router.getCurrentNavigation().extras.state.type;
  }

  ngOnInit(): void {
  }

  async startReading(): Promise<void> {
    if (this.cardType === CardType.Spritz) {
      await this.router.navigateByUrl('/spritz');
    } else {
      await this.router.navigateByUrl('/rhythmic');
    }
  }

  async backToMenu(): Promise<void> {
    await this.router.navigateByUrl('/menu');
  }
}
