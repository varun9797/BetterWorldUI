import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as config from "./../config.json";

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  validateTokenUrl = config.default.HOST_NAME+"/users/validateToken";
  constructor(private http: HttpClient) {
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isValidToken(token): Observable<any> {
    let headers = new HttpHeaders().set('token',token);
    console.log(`${this.validateTokenUrl}`);
    return this.http.get(`${this.validateTokenUrl}`,{
      headers:headers
    }).pipe(catchError((error: HttpErrorResponse) => throwError(error)
   ));
  }

  isLogged() :Observable<any> {
    let isValid;
    return new Observable(observer => {
      let token = localStorage.getItem(TOKEN)
      if(token) {
        this.isValidToken(token).subscribe(data=>{
          if(data.error == 0){
          //  alert(token);
            observer.next(true);
          } else {
            alert("User is not Valid");
            observer.next(false);
          }
        }, error=>{
          //alert("Error:"+JSON.stringify(error));
          observer.next(false);
        })
      } else {
       //alert("Please login first");
       observer.next(false);
      }
    })

  }
}
