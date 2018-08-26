import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-door-create',
  templateUrl: './door-create.component.html',
  styleUrls: ['./door-create.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DoorCreateComponent implements OnInit {

  door = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveDoor() {
    this.http.post('http://localhost:8000/doorlock/api/door', this.door)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/door-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
