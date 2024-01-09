import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './login.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginSevice: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  formSubmit() {
    const data: Login = {
      identifier: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.loginSevice.login(data).subscribe({
      // status code 200 (SUCCESS)
      next: res => {
        // TODO: store jwt in local storage
        

        // TODO: redirect user to Home
        // this.router.navigateByUrl('/tabs/home');
      },
      error: err => {
        console.log('ERROR', err);
      }
    });
  }

}
