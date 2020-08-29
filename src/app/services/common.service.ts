import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  async sleep(ms): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
