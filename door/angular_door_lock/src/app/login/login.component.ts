import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {}

  constructor(private _auth: AuthService,
    private _router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

  userLogin(){
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/doors']);
      },
      err => console.log(err)
    )
  }
  // userLogin(){
  //   this.http.post('http://localhost:8000/userapp/api/login', this.user)
  //   .subscribe(res => {      
  //     localStorage.setItem('token', res['token']);
  //     this._router.navigate(['/doors']);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
  
}
