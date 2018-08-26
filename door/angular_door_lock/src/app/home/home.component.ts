import { Component, OnInit } from '@angular/core';
import { DoorlockService } from '../doorlock.service';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DoorlockService]
})

export class HomeComponent implements OnInit {

  doors: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/doorlock/api/door/').subscribe(data => {
      this.doors = data;
    });
  }

  // getdoors(){
  //   this.DoorlockService.doorlockdata().subscribe(
  //     response => {
  //       this.doors = response;
  //     },
  //     error => console.log('error ', error)
  //   )
  // }

  // doorstatus(){
  //   this.DoorlockService.doorstatus(this.doordata).subscribe(
  //     response => {
  //       alert('User '+this.doordata.title+' has been created');
  //     },
  //     error => console.log('error ', error)
  //   )
  // }

}
