import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  @Output()
  calenderData=new EventEmitter<any>();
  eventCalenderData=new EventEmitter<any>();
  eventShowList=new EventEmitter<any>();
  eventIsActiveType = new EventEmitter<any>();
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
}
