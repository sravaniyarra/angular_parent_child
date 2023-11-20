import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  mydata = "./assets/data.json";
  getData(){
    return this.http.get(this.mydata)
  }
}
