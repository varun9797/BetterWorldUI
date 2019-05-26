var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarView } from 'angular-calendar';
import { CommonService } from '../services/common.service';
var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var EventCalendarComponent = /** @class */ (function () {
    function EventCalendarComponent(modal, _commonService) {
        var _this = this;
        this.modal = modal;
        this._commonService = _commonService;
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new Subject();
        this.events = [
        /* {
           start: subDays(startOfDay(new Date()), 1),
           end: addDays(new Date(), 1),
           title: 'A 3 day event',
           color: colors.red,
           actions: this.actions,
           allDay: true,
           resizable: {
             beforeStart: true,
             afterEnd: true
           },
           draggable: true
         },
         {
           start: startOfDay(new Date()),
           title: 'An event with no end date',
           color: colors.yellow,
           actions: this.actions
         },
         {
           start: new Date('2018-11-10 07:46:03'),
           title: 'custome varun event',
           color: colors.yellow,
           actions: this.actions
         },
         {
           start: subDays(endOfMonth(new Date()), 3),
           end: addDays(endOfMonth(new Date()), 3),
           title: 'A long event that spans 2 months',
           color: colors.blue,
           allDay: true
         },
         {
           start: addHours(startOfDay(new Date()), 2),
           end: new Date(),
           title: 'A draggable and resizable event',
           color: colors.yellow,
           actions: this.actions,
           resizable: {
             beforeStart: true,
             afterEnd: true
           },
           draggable: true
         }*/
        ];
        this.activeDayIsOpen = true;
    }
    EventCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._commonService.eventCalenderData.subscribe(function (data) {
            _this.events = [];
            data.forEach(function (element) {
                console.log("****", element);
                _this.events.push({
                    title: element.eventheading + ' Event Description ' + element.eventdiscription,
                    start: new Date(element.eventstartdate),
                    color: colors.red,
                });
                _this.refresh.next();
            });
            _this.refresh.next();
        });
    };
    EventCalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (isSameMonth(date, this.viewDate)) {
            this.viewDate = date;
            if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    EventCalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    EventCalendarComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    EventCalendarComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: startOfDay(new Date()),
            end: endOfDay(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    __decorate([
        ViewChild('modalContent'),
        __metadata("design:type", TemplateRef)
    ], EventCalendarComponent.prototype, "modalContent", void 0);
    EventCalendarComponent = __decorate([
        Component({
            selector: 'event-calendar-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styleUrls: ['./event-calendar.component.css'],
            templateUrl: './event-calendar.component.html'
        }),
        __metadata("design:paramtypes", [NgbModal, CommonService])
    ], EventCalendarComponent);
    return EventCalendarComponent;
}());
export { EventCalendarComponent };
//# sourceMappingURL=event-calendar.component.js.map