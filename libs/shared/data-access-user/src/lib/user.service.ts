import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isUserLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  checkCredentials(username: string, password: string) {
    if (username === 'ks-day' && password === 'spd') {
      this.isUserLoggedIn.next(true);
    }
  }

  logout() {
    this.isUserLoggedIn.next(false);
  }
}