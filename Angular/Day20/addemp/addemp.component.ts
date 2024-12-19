import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

  empObj:any=<Employee>{};
  allCountry:any[]=[];

  onSubmit(f:NgForm){

  }

}
