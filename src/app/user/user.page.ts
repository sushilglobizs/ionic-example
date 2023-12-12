import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ModalController } from '@ionic/angular';
import { UserMenuComponent } from './user-menu/user-menu.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  slides!: string[];
  favourited = false;

  constructor(
    private userService: UserService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.getSlides();
  }

  getSlides() {
    this.slides = this.userService.getSlides();
  }

  async menuClicked() {
    const modal = await this.modalCtrl.create({
      component: UserMenuComponent
    });

    modal.present();
  }

  favourite() {
    this.favourited = !this.favourited;
  }

}
