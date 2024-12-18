import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  incorrect:string='';
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  constructor(private service:HttpService,
              private router:Router
  ){}
  


  ngOnInit(): void {
    document.body.className='bg_background';
  }

  onSubmit(f:NgForm){
    let obj={
      emailid:f.value.emailid,
      password:f.value.password
    }

    this.service.login(obj)
    .subscribe((response:any)=>{
      // console.log(response);

      if(response.msg.toLowerCase()=='valid user'){
        // navigate to home
        sessionStorage.setItem("username",response.user.name);
        this.router.navigate(['/home']);
      }else{
        this.incorrect=response.msg;
      }

    })
    

  }

  ngOnDestroy(): void {
    document.body.className='';
  }

}
