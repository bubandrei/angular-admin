import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }
  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: { email: string, password: string }) {
if(userInfo.email === 'admin@gmail.com' && userInfo.password === 'admin123'){
  this.setToken('nkdjsgnkdjbgdfbglf')
}
  }

}
