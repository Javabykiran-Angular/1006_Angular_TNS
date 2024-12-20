import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

empData:any[]=[];
isRadioClick:boolean=false;
modalRef!: BsModalRef;
config = {
  animated: true,
  
  ignoreBackdropClick: true,
  class: "alert alert-danger"
};  

empObj:Employee=<Employee>{};

  constructor(private service:HttpService,
              private modalservice:BsModalService
  ){}

  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
    this.service.getAllEmpRecords()
    .subscribe((response:any)=>{
      // console.log(response);
      this.empData=response;
    });
  }

  onEdit(item:any){
    this.isRadioClick=true;
    this.empObj=item;
  }

  onUpdate(popUp:TemplateRef<any>){
    if(this.isRadioClick){
      //Update logic

      this.modalRef = this.modalservice.show(        
        popUp, this.config);

    }else{
      alert("Please Select a Record to be Updated..");
    }
  }

  onDelete(){
    if(this.isRadioClick){
      //Delete Logic
    }else{
      alert("Please Select a Record to be Deleted..")
    }
  }

}
