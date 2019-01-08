import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as config from "./../config.json";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postSocietyUrl= config.default.HOST_NAME+"/society/registerSociety";
  postOwnerUrl= config.default.HOST_NAME+"/society/owner/list";
  postFlatUrl= config.default.HOST_NAME+"/society/registerFlat";
  postBuildingUrl= config.default.HOST_NAME+"/society/registerBuilding";
  

  registerSociety(societyreg){
    return this.http.post(this.postSocietyUrl, societyreg);
  }

  registerOwner(ownerreg){
    return this.http.post(this.postOwnerUrl, ownerreg);
  }

  registerFlat(flatreg){
    return this.http.post(this.postFlatUrl, flatreg);
  }

  registerBuilding(buildingreg){
    return this.http.post(this.postBuildingUrl, buildingreg);
  }

}
