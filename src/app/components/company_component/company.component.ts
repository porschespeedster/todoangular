import { Response } from '@angular/http';
import { CompanyService } from '../../services/company.service';
import Company from '../../models/company.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  // selector: 'app-user-login',
  templateUrl: './createcmp.component.html',
  
  // styleUrls: ['./app.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private companyService: CompanyService,
    private router: Router,
    
  ) { }

  
  public newCompany: Company = new Company();
   // An Empty list for the visible todo list
   companyList: Company[];
   isView: Variable;

  ngOnInit(): void {
    // At component initialization the
      this.companyService.getCompanies()
      .subscribe(companies => {
        // assign the todolist property to the proper http response
        this.companyList = companies;        
      });
  }
  

  create() {
    this.isView.value = 'create';
    this.companyService.create(this.newCompany)
    .subscribe((res) => {

    });

  }

  viewCompanyProfile() {    
    this.companyService.getCompanies()
    .subscribe((companies) => {  
      this.isView.value = 'true';
      this.router.navigate(['createcp']);   

    });   

  }

}

