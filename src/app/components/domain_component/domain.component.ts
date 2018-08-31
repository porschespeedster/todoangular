import { Response } from '@angular/http';
import { DomainService } from '../../services/domain.service';
import { CompanyService } from '../../services/company.service';
import Company from '../../models/company.model';
import Domain from '../../models/domain.model';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  templateUrl: './domain.component.html',  
})
export class DomainComponent implements OnInit {
  
  show:boolean = true;
  createShow:boolean = true;
  viewShow:boolean = true;  
  cmpid:number = parseInt(localStorage.getItem("loggedinusercmpid"));

  constructor(
    
    private domainService: DomainService,
    private companyService: CompanyService,
    private router: Router    
    
  ) { }

  
  public newDomain: Domain = new Domain();
  public company: Company = new Company();
  public companyName:String;
   
   companyList: Company[];
   isView = true;
   
   
  ngOnInit(): void {

    let dummyCmpid = this.cmpid
    let dummyCmp : Company;
    this.companyService.getCompanies()
    .subscribe(companies => {      
      this.companyList = companies;        

      this.companyList.forEach(function(value){
        if(value.cmpid === dummyCmpid){
          dummyCmp = value;
        }

      })  
      this.company = dummyCmp
      console.log(dummyCmp);
      console.log(this.company);
    });

    console.log(dummyCmpid);
    console.log(this.cmpid);   
    
    
  }
  

  create() {    
    this.newDomain.cmpid = this.cmpid
    this.domainService.create(this.newDomain)
    .subscribe((res) => {

    });
  }

  getCompanyDomain() {             
    
    this.domainService.getCompanyDomain(this.cmpid)
    
  }

  getDomain() {    
    this.domainService.getDomain()
    
  }

  viewDomain() {    
    
    this.companyService.getCompanies()
    .subscribe((companies) => {        
      console.log('Inside view company profile')      
      this.companyList = companies;      
      this.router.navigate(['createcp']);
    });   

  }

  

}

