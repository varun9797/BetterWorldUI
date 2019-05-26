import { async, TestBed } from '@angular/core/testing';
import { MonthlyRecieptComponent } from './monthly-reciept.component';
describe('MonthlyRecieptComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MonthlyRecieptComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MonthlyRecieptComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=monthly-reciept.component.spec.js.map