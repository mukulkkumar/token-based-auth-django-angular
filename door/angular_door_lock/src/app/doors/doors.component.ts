import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})

export class DoorsComponent implements OnInit {
  doors: any;

  constructor(private http: HttpClient, private _auth: AuthService) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/doorlock/api/door').subscribe(data => {
      this.doors = data;
    });
  }

}
