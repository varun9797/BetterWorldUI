import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  @Output()
  calenderData=new EventEmitter<any>();
  eventCalenderData=new EventEmitter<any>();
  eventShowList=new EventEmitter<any>();
  eventIsActiveType = new EventEmitter<any>();
  private loginUserSubject = new BehaviorSubject(null);
  loginUserInfo = this.loginUserSubject.asObservable();
  // eventOwnerRequestObj = new EventEmitter<any>();
  eventOwnerRequestObj;
  constructor() { }

  emitCalanderData(paymentHistory){
    this.calenderData.emit(paymentHistory)  
  }

  emitEventCalanderData(societyEvents){
    this.eventCalenderData.emit(societyEvents)  
  }

  emitShowListEvent(showListEvent){
    this.eventShowList.emit(showListEvent)  
  }

  emitActiveType(type){
    this.eventIsActiveType.emit(type) 
  }

  emitOwnerListRequestobj(obj){
    this.eventOwnerRequestObj = obj
  }

  setLoginUserInfo(message: any) {
    this.loginUserSubject.next(message)
  }
}
