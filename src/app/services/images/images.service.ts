import { Injectable } from '@angular/core';
import { FakeBackendService } from '../fake-backend/fake-backend.service';
import { Observable } from 'rxjs';
import { ImageDataInterface } from '../../models/image-data.interface';
import { imagesMock } from './mocks/images.mock';
import { ImageDataDto } from './dto/image-data.dto';

@Injectable()
export class ImagesService {

  constructor(private backendService: FakeBackendService) { }

  public getImages(): Observable<ImageDataInterface[]> {
      return this.backendService.get$<ImageDataDto[]>(imagesMock);
  }
}
