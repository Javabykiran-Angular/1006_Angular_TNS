import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {

  country:any[]=[
    {cid:1,cname:"India"},
    {cid:2,cname:"US"},
    {cid:3,cname:"Japan"},
    {cid:4,cname:"South Africa"}
  ];

  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";


  onSubmit(f:NgForm){
    console.log(f.value.myusername);
  }


}
