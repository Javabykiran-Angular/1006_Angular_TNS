import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:any[]=[];
  id!:any;
  title:string='';
  body:string='';
  isHidden:boolean=true;

  constructor(private service:HttpService){}
  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
      this.service.getPost()
      .subscribe((response:any)=>{
        // console.log(response);
        this.posts=response;
      },(myerror)=>{
        // alert("Something is went wrong");

        if(myerror.status>500){
          alert("Server Side Error")
        }else if(myerror.status>400){
          alert("Client side Error")
        }else if(myerror.status>300){
          alert("Redirection error");
        }else{
          alert("Something went Wrong");
        }
      })
  }

  onSubmit(mytitle:any,mybody:any){
    let jsonObj={
      tilte:mytitle,
      body:mybody
    }

    this.service.postData(jsonObj)
    .subscribe((response)=>{
      console.log(response);
      
    })

  }

  onEdit(item:any){
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){
    let jsonObj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.updateData(jsonObj)
    .subscribe((response)=>{
      console.log(response);
    })

  }

  onDelete(id:any){
    this.service.deleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }



}
