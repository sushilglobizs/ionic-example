import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

  getNewestOffers(): Product[] {
    return [{
      id: 1,
      src: '../../assets/1.png',
      name: 'Burger with Extra Cheese',
      price: 999,
      offerPrice: 299,
      brand: 'Apple Singpore',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consectetur dolores? Explicabo corrupti sapiente nihil nulla exercitationem corporis doloribus ut quas! At facilis ut laudantium dolorem dolorum, recusandae ipsa hic.'
    }, {
      id: 2,
      src: '../../assets/2.png',
      name: 'Pepperoni Pizza with Extra Cheese',
      price: 999,
      offerPrice: 299,
      brand: 'Apple Singpore',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consectetur dolores? Explicabo corrupti sapiente nihil nulla exercitationem corporis doloribus ut quas! At facilis ut laudantium dolorem dolorum, recusandae ipsa hic.'
    }, {
      id: 3,
      src: '../../assets/3.png',
      name: 'Strawberry Flavoured Donut',
      price: 999,
      offerPrice: 299,
      brand: 'Apple Singpore',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consectetur dolores? Explicabo corrupti sapiente nihil nulla exercitationem corporis doloribus ut quas! At facilis ut laudantium dolorem dolorum, recusandae ipsa hic.'
    }]
  }
}
