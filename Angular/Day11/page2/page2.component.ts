import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.getDataFromURL();
  }

  getDataFromURL(){
    this.route.paramMap
    .subscribe((param)=>{
      console.log(param.get("id"))
    });
  }

}
