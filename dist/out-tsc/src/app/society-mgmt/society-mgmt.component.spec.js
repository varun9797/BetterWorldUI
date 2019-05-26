import { async, TestBed } from '@angular/core/testing';
import { SocietyMgmtComponent } from './society-mgmt.component';
describe('SocietyMgmtComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SocietyMgmtComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SocietyMgmtComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=society-mgmt.component.spec.js.map