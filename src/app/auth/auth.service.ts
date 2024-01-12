import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storage: Storage
  ) {
  }

  async saveToken(token: string) {
    await this.storage.set('token', token);
  }

  async getToken(key: string) {
    await this.storage.get(key);
  }

  async deleteToken(key: string) {
    await this.storage.remove(key);
  }

}
