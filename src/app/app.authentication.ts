import { Injectable , Inject, EventEmitter,  Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationHelper {
    public static moduleName= [];
  private tokenKey: string = 'tokenKey';
   @Output() userValueChanged: EventEmitter<any> = new EventEmitter(true);
  private user: any;
  constructor(private route: Router) {
  }
  isLoggedIn() {
     let token = localStorage.getItem(this.tokenKey);
     if (token && token.length > 0) {
         return true;
     }
     return false;
  }

  setLoggedIn(token) {
  localStorage.setItem(this.tokenKey, token);
  }

  removeLoggedIn() {
    localStorage.removeItem(this.tokenKey);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  setUser(inputUser) {
    this.user = inputUser;
  }

  getUser() {
    return this.user;
  }

  hasUser() {
    let user: boolean;

    if (this.user) {
      user = true;
    } else {
      user = false;
    }
    return user;
  }

 userValueChangedEvent(value): void {
  this.user = value;
  this.userValueChanged.emit(value);
 }

 getuserValueChangeEmitter(): EventEmitter<any> {
    return this.userValueChanged;
  }

  redirectToLogin() {
    this.route.navigate(['login']);
  }

  redirectToDashboard() {
        this.route.navigate(['dashboard']);
  }

}
