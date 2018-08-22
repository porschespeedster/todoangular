import User from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// RxJS operator for mapping the observable
// import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  api_url = 'http://localhost:3000';
  userUrl = `${this.api_url}/user/user`;

  constructor(
    private http: HttpClient
  ) { }



  login(user: User): Observable<any> {
    return this.http.post(`${this.userUrl}/login`, user);
  }
}
