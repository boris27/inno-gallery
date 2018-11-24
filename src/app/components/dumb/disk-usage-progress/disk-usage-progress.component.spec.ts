import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskUsageProgressComponent } from './disk-usage-progress.component';

describe('DiskUsageProgressComponent', () => {
    let component: DiskUsageProgressComponent;
    let fixture: ComponentFixture<DiskUsageProgressComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DiskUsageProgressComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DiskUsageProgressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
