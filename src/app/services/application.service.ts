import Application from '../models/application.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// RxJS operator for mapping the observable
// import 'rxjs/add/operator/map';

@Injectable()
export class ApplicationService {

  api_url = 'http://localhost:3000';
  appUrl = `${this.api_url}/app/app`;

  constructor(
    private http: HttpClient
  ) { }


  

  getCompanyDomain(cmpid:number): Observable<any> {
    
    return this.http.get(`${this.appUrl}/get/`+cmpid).
    pipe(map((res:any)  => {    
      
      return res["data"];
    }))

  }

  getDomain(): Observable<any> {
    return this.http.get(`${this.appUrl}/get/`);
  }

  create(application: Application): Observable<any> {
    return this.http.post(`${this.appUrl}/create`, application);
  }
}
