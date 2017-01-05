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
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (this.user && this.user.role)
      if (this.user.role.indexOf('admin') >= 0 || this.user.role.indexOf('superadmin') >= 0) {
        return true;
      } else {
        return false;
      }
  }

 hasPermission(moduleName) {
     if (this.user.modules.indexOf('leaderboard') >= 0) {
         return true;
     }else {
         return false;
     }
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