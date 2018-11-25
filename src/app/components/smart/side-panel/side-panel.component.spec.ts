import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelComponent } from './side-panel.component';
import { MockComponent } from 'ng-mocks';
import { MenuLinkComponent } from '../../dumb/menu-link/menu-link.component';
import { DiskUsageProgressComponent } from '../../dumb/disk-usage-progress/disk-usage-progress.component';
import { instance, mock } from 'ts-mockito';
import { LinksService } from '../../../services/links/links.service';
import { DiskUsageService } from '../../../services/disk-usage/disk-usage.service';

describe('SidePanelComponent', () => {
    let component: SidePanelComponent;
    let fixture: ComponentFixture<SidePanelComponent>;
    const linksServiceMock = mock<LinksService>(LinksService);
    const diskUsageServiceMock = mock<DiskUsageService>(DiskUsageService);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SidePanelComponent,
                MockComponent(MenuLinkComponent),
                MockComponent(DiskUsageProgressComponent),
            ],
            providers: [
                {provide: LinksService, useFactory: () => instance(linksServiceMock)},
                {provide: DiskUsageService, useFactory: () => instance(diskUsageServiceMock)},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidePanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
