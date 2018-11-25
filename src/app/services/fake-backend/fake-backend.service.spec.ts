import { TestBed } from '@angular/core/testing';

import { FakeBackendService } from './fake-backend.service';

describe('FakeBackendService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [FakeBackendService],
    }));

    it('should be created', () => {
        const service: FakeBackendService = TestBed.get(FakeBackendService);
        expect(service).toBeTruthy();
    });
});
