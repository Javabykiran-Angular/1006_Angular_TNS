import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){}

  myid:number=9;

  jsonObj={
    id:9,
    fname:"Sumit",
    lname:"Raokhande"
  }

  onPage1(){
    this.router.navigate(['/Page1']);
  }
  onPage2(){
    this.myid=8;
    this.router.navigate(['/Page2',this.myid]);
  }

  onFollower(){
    this.router.navigate(['/follower']);
  }

  onQueryParameter(){
    this.router.navigate(['/queryparam'],{
      queryParams:this.jsonObj
    });
  }
  

}
