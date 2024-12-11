import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component {
result:number=0;
myresult:number=0;
myname:string='';

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;
  }

  onChange(){
    console.log("Change Event Occur...");
  }

  onKeyUp(myvalue:string){
    if(myvalue.length>5){
      alert("U exceeds the character")
    }else{
      console.log("Key Up Event Occur...");
    }
    
  }

  onKeyDown(){
    console.log("Key Down Event Occur...");
  }

  onKeyEnter(){
    console.log("enter key is pressed...")
  }


}
