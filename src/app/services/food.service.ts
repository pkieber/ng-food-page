import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[] {
    return [
      'assets/img/pizza1.jpg',
      'assets/img/pizza2.jpg',
      'assets/img/pizza3.jpg',
      'assets/img/pizza4.jpg',
      'assets/img/pizza5.jpg',
      'assets/img/pizza6.jpg',
    ]
  }
}
