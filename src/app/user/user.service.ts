import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getSlides() {
    return [
      '../../assets/1.png',
      '../../assets/2.png',
      '../../assets/3.png',
      '../../assets/4.png',
      '../../assets/5.png',
      '../../assets/6.png',
    ]
  }
}
