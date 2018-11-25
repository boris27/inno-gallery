import { TestBed } from '@angular/core/testing';

import { ImagesService } from './images.service';
import { instance, mock } from 'ts-mockito';
import { FakeBackendService } from '../fake-backend/fake-backend.service';

describe('ImagesService', () => {
    const backendServiceMock = mock<FakeBackendService>(FakeBackendService);

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            ImagesService,
            {provide: FakeBackendService, useFactory: () => instance(backendServiceMock)},
        ]
    }));

    it('should be created', () => {
        const service: ImagesService = TestBed.get(ImagesService);
        expect(service).toBeTruthy();
    });
});
