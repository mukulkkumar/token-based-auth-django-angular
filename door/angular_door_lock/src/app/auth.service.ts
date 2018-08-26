import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  
  private _loginUrl = "http://localhost:8000/userapp/api/login"

  constructor(private http: HttpClient, private _router: Router) { }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
