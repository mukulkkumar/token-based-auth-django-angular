import { Component } from '@angular/core';
import { DoorlockService } from './doorlock.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DoorlockService]
})

export class AppComponent {
  title = 'app';
  doordata;
  doors;

  constructor(private DoorlockService: DoorlockService){}

  ngOnInit(){
    this.DoorlockService.doorlockdata();

    this.doordata = {
      title: ''
    };

    this.doors = [];
  }


  getdoors(){
    this.DoorlockService.doorlockdata().subscribe(
      response => {
        this.doors = response;
      },
      error => console.log('error ', error)
    )
    // console.log('This data');
  }

  doorstatus(){
    this.DoorlockService.doorstatus(this.doordata).subscribe(
      response => {
        alert('User '+this.doordata.title+' has been created');
      },
      error => console.log('error ', error)
    )
  }

  
}
