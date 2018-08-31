import Domain from '../models/domain.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// RxJS operator for mapping the observable
// import 'rxjs/add/operator/map';

@Injectable()
export class DomainService {

  api_url = 'http://localhost:3000';
  domainyUrl = `${this.api_url}/domain/domain`;

  constructor(
    private http: HttpClient
  ) { }


  getCompanies(): Observable<Domain[]>{
    return this.http.get(`${this.domainyUrl}/get`).
    pipe(map((res:any)  => {
      // Maps the response object sent from the server

      return res["data"].docs as Domain[];
    }))
  }

  getCompanyDomain(cmpid:number): Observable<any> {
    console.log(`${this.domainyUrl}/get/`+cmpid)    
    return this.http.get(`${this.domainyUrl}/get/`+cmpid).
    pipe(map((res:any)  => {    
      console.log(res)    
      return res["data"];
    }))

  }

  getDomain(): Observable<any> {
    return this.http.get(`${this.domainyUrl}/get/`);
  }

  create(domain: Domain): Observable<any> {
    return this.http.post(`${this.domainyUrl}/create`, domain);
  }
}
