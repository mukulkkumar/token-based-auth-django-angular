import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-door-detail',
  templateUrl: './door-detail.component.html',
  styleUrls: ['./door-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DoorDetailComponent implements OnInit {

  door = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getDoorDetail(this.route.snapshot.params['id']);
  }

  getDoorDetail(id) {
    this.http.get('http://localhost:8000/doorlock/api/door/'+id).subscribe(data => {
      this.door = data;
    });
  }

  deleteBook(id) {
    this.http.delete('http://localhost:8000/doorlock/api/door/'+id)
      .subscribe(res => {
          this.router.navigate(['/doors']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
