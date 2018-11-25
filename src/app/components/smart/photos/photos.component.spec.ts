import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { MockComponent } from 'ng-mocks';
import { ImageComponent } from '../../dumb/image/image.component';
import { instance, mock } from 'ts-mockito';
import { ImagesService } from '../../../services/images/images.service';

describe('PhotosComponent', () => {
    let component: PhotosComponent;
    let fixture: ComponentFixture<PhotosComponent>;
    const imagesServiceMock = mock<ImagesService>(ImagesService);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PhotosComponent,
                MockComponent(ImageComponent),
            ],
            providers: [
                {provide: ImagesService, useFactory: () => instance(imagesServiceMock)},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PhotosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
