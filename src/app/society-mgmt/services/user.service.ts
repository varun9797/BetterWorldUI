import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as config from "./../config.json";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  TOKEN = 'TOKEN';
  constructor(public http: HttpClient) { }

  getSocietyURL = config.default.HOST_NAME + "/society/society";
  getBuildingsURL = config.default.HOST_NAME + "/society/building";
  getOwnerURL = config.default.HOST_NAME + "/society/owner";
  getFlatURL = config.default.HOST_NAME + "/society/flat";
  putPayment = config.default.HOST_NAME + "/society/flat/pendingPayment";
  flatPaymentHistory = config.default.HOST_NAME + "/society/paymenthistory";
  societyEventURL = config.default.HOST_NAME + "/society/societyEvent";
  selectedTypeList = config.default.HOST_NAME + "/society/owner/list";
  callStoredProcUrl = config.default.HOST_NAME + "/society/storedProc";

  getOwner(query): Observable<any> {
    console.log(`${this.getOwnerURL}/phonenumber/?value='${query.oPhoneNumber}'`);
    return this.http.get(`${this.getOwnerURL}/phonenumber/?value='${query.oPhoneNumber}'`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }

  getOwnerByID(ownerId): Observable<any> {
    console.log(`${this.getOwnerURL}/ownerid/?value='${ownerId}'`);
    return this.http.get(`${this.getOwnerURL}/ownerid/?value=${ownerId}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }

  getAllOwners(): Observable<any> {
    console.log(`${this.getOwnerURL}`);
    return this.http.get(`${this.getOwnerURL}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  getSociety(): Observable<any> {
    return this.http.get(`${this.getSocietyURL}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  getSocietyInfo(id): Observable<any> {
    console.log(`${this.getSocietyURL}/societyid/?value=${id}`);
    return this.http.get(`${this.getSocietyURL}/societyid/?value=${id}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  getBuilding(socID): Observable<any> {
    return this.http.get(`${this.getBuildingsURL}/societyid/?value=${socID}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  getFlatList(societyId, buildingname): Observable<any> {
    console.log(`${this.getFlatURL}/buildingname/?value=${buildingname}`);
    return this.http.get(`http://nodebw-env.xctnnannuz.us-east-1.elasticbeanstalk.com/society/flat/societyid/buildingname/?value1=${societyId}&value2="${buildingname}"`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }

  getOwnerFlatList(ownerId): Observable<any> {
    console.log(`${this.getFlatURL}/ownerid/?value=${ownerId}`);
    return this.http.get(`${this.getFlatURL}/ownerid/?value=${ownerId}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }

  getOwnerList(flatIds): Observable<any> {
    console.log(`${this.getOwnerURL}/flatIds/?value=${flatIds}`);
    return this.http.get(`${this.getOwnerURL}/flatIds/?value='${flatIds}'`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }

  putFlatPayment(flatObj): Observable<any> {
    let headers = new HttpHeaders().set('token', localStorage.getItem(this.TOKEN));
    console.log(flatObj);
    let paramList = {
      "pendingPayment": flatObj.pendingPayment,
      "ownerid": flatObj.ownerid,
      "flatid": flatObj.flatid
    };
    console.log(paramList);
    return this.http.put(this.putPayment, paramList, { headers: headers })
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  getFlatPaymentHistory(flatId): Observable<any> {
    console.log("uuuuuuuu", `${this.flatPaymentHistory}/flatid/?value=${flatId}`);
    return this.http.get(`${this.flatPaymentHistory}/flatid/?value=${flatId}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  getSocietyEvents(societyId): Observable<any> {
    console.log(`${this.societyEventURL}/societyid/?value='${societyId}'`);
    return this.http.get(`${this.societyEventURL}/societyid/?value='${societyId}'`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }

  callStoredProc(storedProcString): Observable<any> {
    const postObj = {
        storedProc:storedProcString
    }
    console.log(`${this.callStoredProcUrl}`);
    return this.http.post(`${this.callStoredProcUrl}`,postObj)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }

  getSelectedTypelist(societyIds, buildingNames, flatIds) {
    let headers = new HttpHeaders().set('token', localStorage.getItem(this.TOKEN));
    let searchObject = {
      "societyIds": societyIds,
      "buildingNames": buildingNames,
      "flatIds": flatIds
    }
    console.log("searchObject ", searchObject);
    return this.http.post(this.selectedTypeList, searchObject, {
      headers: headers
    })
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
}
