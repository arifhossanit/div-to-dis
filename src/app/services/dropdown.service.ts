import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  baseUrl= 'http://localhost/angular8/div-to-dis/api';
  constructor(private http:HttpClient) { }
  getDiv(){
    return this.http.get(`${this.baseUrl}/division.php`)
  }
  getDist(divi:any){
    var id= divi;
    let params = new HttpParams().set("id", id.divi.toString());
    console.log(params);
    return this.http.get(`${this.baseUrl}/district.php`,{params} )
  }
}
