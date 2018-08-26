import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-door-edit',
  templateUrl: './door-edit.component.html',
  styleUrls: ['./door-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DoorEditComponent implements OnInit {

  door = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDoor(this.route.snapshot.params['id']);
  }

  getDoor(id) {
    this.http.get('http://localhost:8000/doorlock/api/door/'+id).subscribe(data => {
      this.door = data;
    });
  }

  updateDoor(id, data) {
    this.http.put('http://localhost:8000/doorlock/api/door/'+id, data)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/door-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
