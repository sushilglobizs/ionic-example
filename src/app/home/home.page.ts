import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Post } from './home.model';
import { ModalController } from '@ionic/angular';
import { AddPostPage } from './add-post/add-post.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  posts!: Post[];
  thumbnailLoaded: any = {};

  constructor(
    private homeService: HomeService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.homeService.getPosts().subscribe(res => {
      this.posts = res;
    });
  }

  imgLoaded(id: number) {
    this.thumbnailLoaded[id] = true;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddPostPage,
    });
    modal.present();

    // const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
  }

}
