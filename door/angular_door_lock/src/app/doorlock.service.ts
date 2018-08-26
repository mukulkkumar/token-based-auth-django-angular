import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DoorlockService {

  constructor(private http: HttpClient) {}

  doorlockdata(){
    return this.http.get('http://localhost:8000/doorlock/api/door/');
  }

  doorstatus(doorData): Observable<any>{
    return this.http.post('http://localhost:8000/doorlock/api/door/', doorData);
  }

}
