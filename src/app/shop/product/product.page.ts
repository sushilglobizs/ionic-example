import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;

      this.getProduct(id);
    });
  }

  getProduct(id: number) {
    this.product = this.shopService.getNewestOffers().filter(item => item.id === id)[0];
  }

}
