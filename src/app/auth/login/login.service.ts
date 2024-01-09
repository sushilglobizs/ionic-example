import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  // to call login api
  login(data: Login): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>('https://dailystandup.globizs.com/api/auth/local', data);
  }
}
