import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Router } from '@angular/router';
import { Product } from './product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  newestOffers!: Product[];

  constructor(
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNewestOffers();
  }

  // fetch new offers
  getNewestOffers() {
    this.newestOffers = this.shopService.getNewestOffers();
  }

  goToProduct(id: number) {
    this.router.navigateByUrl('/tabs/shop/product/' + id);      // navigate to product page
  }

}
