import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  myForm!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      // title: new FormControl('', ),
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  formSubmit() {
    // send to jsonplaceholder.org
    
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

}
