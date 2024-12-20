import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../model/employee';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  empObj:Employee=<Employee>{};
  allCountry:any[]=[];

  constructor(private service:HttpService,
              private router:Router
  ){}
  
  ngOnInit(): void {
    this.getAllCountryFromBackend();
  }

  getAllCountryFromBackend(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      // console.log(response);
      this.allCountry=response;
      
    });
  }
  

  onSubmit(){
    // console.log(this.empObj);

    this.empObj.createdby=sessionStorage.getItem("username");
    this.empObj.createddtm=Date.now();
    this.empObj.updatedby=sessionStorage.getItem("username");
    this.empObj.updateddtm=Date.now();  

    this.service.addEmployee(this.empObj)
    .subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/home']);
    })

  }


}
