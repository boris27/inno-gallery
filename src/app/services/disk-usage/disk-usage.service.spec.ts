import { TestBed } from '@angular/core/testing';

import { DiskUsageService } from './disk-usage.service';
import {instance, mock} from 'ts-mockito';
import {FakeBackendService} from '../fake-backend/fake-backend.service';

describe('DiskUsageService', () => {
    const backendServiceMock = mock<FakeBackendService>(FakeBackendService);

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            DiskUsageService,
            {provide: FakeBackendService, useFactory: () => instance(backendServiceMock)},
        ]
    }));

    it('should be created', () => {
        const service: DiskUsageService = TestBed.get(DiskUsageService);
        expect(service).toBeTruthy();
    });
});
