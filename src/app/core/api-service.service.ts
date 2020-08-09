import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {CardModel} from '../shared/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getCards(): Observable<CardModel[]> {
    return this.http.get<CardModel[]>('assets/cards.json');
  }
}
