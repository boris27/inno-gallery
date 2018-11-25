import { TestBed } from '@angular/core/testing';

import { LinksService } from './links.service';
import { instance, mock } from 'ts-mockito';
import { FakeBackendService } from '../fake-backend/fake-backend.service';

describe('LinksService', () => {
    const backendServiceMock = mock<FakeBackendService>(FakeBackendService);

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            LinksService,
            {provide: FakeBackendService, useFactory: () => instance(backendServiceMock)},
        ]
    }));

    it('should be created', () => {
        const service: LinksService = TestBed.get(LinksService);
        expect(service).toBeTruthy();
    });
});
