import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Employee } from '../model/employee';
import { DialogService } from '../dialog.service';
import { Title } from '@angular/platform-browser';

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
nameSearch:string='';

empObj:Employee=<Employee>{};
p:number=1;

  constructor(private service:HttpService,
              private modalservice:BsModalService,
              private dialogservice:DialogService,
              private title:Title
  ){}

  ngOnInit(): void {
    this.getDataFromBackend();
    this.title.setTitle("DashBoard | ProjectWork");
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
      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        // console.log(res);
        if(res){
            this.service.deleteEmplyee(this.empObj.id)
            .subscribe((response)=>{
              this.getDataFromBackend();
            })
        }
      });
    }else{
      alert("Please Select a Record to be Deleted..")
    }
  }


}
