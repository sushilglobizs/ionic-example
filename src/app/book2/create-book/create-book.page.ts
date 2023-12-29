import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book2Service } from '../book2.service';
import { BookView } from '../book2-view/book-view.model';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.page.html',
  styleUrls: ['./create-book.page.scss'],
})
export class CreateBookPage implements OnInit {

  bookForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private book2Service: Book2Service,
    private navController: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      author: ['', [Validators.required, Validators.maxLength(255)]],
    });
  }

  formSubmit() {
    const data: BookView = {
      data: this.bookForm.value
    }
    this.book2Service.createBook(data).subscribe(async res => {
      const toast = await this.toastController.create({
        message: 'New book successfully added',
        duration: 3000,
        position: 'bottom'
      });

      await toast.present();

      this.navController.back();
    });
  }

}
