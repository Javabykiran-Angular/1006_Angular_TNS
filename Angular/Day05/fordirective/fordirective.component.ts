import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {


  selected:string='';

  arrProduct:any[]=[
      {
        name:"Samsung",
        price:22000,
        qty:1
      },
      {
        name:"RealMe",
        price:18000,
        qty:1
      },
      {
        name:"OnePlus",
        price:35000,
        qty:1
      },
      {
        name:"Vivo",
        price:10000,
        qty:1
      },
      {
        name:"Motorolla",
        price:30000,
        qty:1
      },
      {
        name:"iPhone",
        price:100000,
        qty:1
      },
  ];

  onMouseOver(myitem:any){
    console.log("Mouse Over Event Occur....");
    console.log(myitem);
    this.selected=myitem.name;
  }

  onMouseOut(){
    this.selected='';
  }

}
