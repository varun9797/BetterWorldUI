import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  @Output()
  calenderData=new EventEmitter();
  eventCalenderData=new EventEmitter();
  eventShowList=new EventEmitter();
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
}
