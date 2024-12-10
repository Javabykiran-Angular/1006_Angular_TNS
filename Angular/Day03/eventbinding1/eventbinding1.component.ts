import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {
count:boolean=true;
  onClick(){
    if(this.count){
      console.log("Click Event Occur...");
      this.count=false;
    }
    
  }

  onImage(){
    console.log("Image Click Occur");
  }

  onSend(name:any){
    console.log(name);
    console.log("Data is "+name.value);
    name.style.background='green';
    name.style.color="white";
  }

  onSend1(myvalue:any){
    console.log(myvalue);
  }


}
