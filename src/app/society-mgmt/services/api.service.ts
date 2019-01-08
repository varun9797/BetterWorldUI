import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as config from "./../config.json";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }
  TOKEN = "TOKEN"
  login(email: string, password: string): Observable<any>{
    return this.http.post(config.default.HOST_NAME+'/users/login', {
      email: email,
      password: password
    });
  }

  getUser(){
    let headers = new HttpHeaders().set('token',localStorage.getItem(this.TOKEN));
    return this.http.get(config.default.HOST_NAME+"/users/getUser",{
      headers:headers
    })

  }

  

}