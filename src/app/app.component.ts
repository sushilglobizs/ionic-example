import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private storage: Storage) {}

  ngOnInit(): void {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
  }
}
