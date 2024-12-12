import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

 @Output() childStrEvent=new EventEmitter();

 @Output() childArrObjEvent=new EventEmitter();

strdata:string="Hello All Hopes So U r enjoying Angular Module..";

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



  onSend(){
    this.childStrEvent.emit(this.strdata);
    this.childArrObjEvent.emit(this.arrProduct);
  }

}
