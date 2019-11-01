import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  registerUrl: string = 'http://localhost:3000/api/register';
  loginUrl: string = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) { }

  register(user) {
    return this.http.post(this.registerUrl, user);
  }

  login(user) {
    return this.http.post(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  loggedOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/events']);

  }

  getToken() {
    return localStorage.getItem('token');
  }
}
