import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {

  mycolor:string='blue';
  rating:number=21;

  jsonObj={
    color:"brown",
    fontSize:"52px",
    "font-family":"Courier New"
  }

}
