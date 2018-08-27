import Company from '../models/company.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// RxJS operator for mapping the observable
// import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {

  api_url = 'http://localhost:3000';
  companyUrl = `${this.api_url}/company/company`;

  constructor(
    private http: HttpClient
  ) { }


  getCompanies(): Observable<Company[]>{
    return this.http.get(this.companyUrl).
    pipe(map((res:any)  => {
      // Maps the response object sent from the server

      return res["data"].docs as Company[];
    }))
  }

  create(company: Company): Observable<any> {
    return this.http.post(`${this.companyUrl}/create`, company);
  }
}
