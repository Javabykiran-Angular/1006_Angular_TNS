import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  login(obj:any){
     return (this.http.post(`${this.baseUrl}login`,obj));
  }

  getAllEmpRecords(){
   return (this.http.get(`${this.baseUrl}getAllEmp`));
  }

  getEmpParticularDataByID(id:any){
     return (this.http.get(`${this.baseUrl}getbyId/${id}`));
  }

  getAllCountry(){
     return (this.http.get(`${this.baseUrl}getAllCountry`));
  }

  addEmployee(obj:any){
   return (this.http.post(`${this.baseUrl}addEmp`,obj,{
      responseType:'text'
    }));
  }

  updateEmployee(obj:any){
    return (this.http.put(`${this.baseUrl}updateEmp`,obj,{
         responseType:'text'
      }));
  }

}
