import { Component, OnInit } from '@angular/core';
import {CardModel} from '../../shared/models/card.model';
import {ApiService} from '../../core/api-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {
  public cards: CardModel[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCards().subscribe(data => {
      this.cards = data;
    });
  }
}
