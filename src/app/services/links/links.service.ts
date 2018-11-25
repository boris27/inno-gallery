import { Injectable } from '@angular/core';
import { FakeBackendService } from '../fake-backend/fake-backend.service';
import { Observable } from 'rxjs';
import { LinkDataInterface } from '../../models/link-data.interface';
import { linksMock } from './mocks/links.mock';
import { LinkDataDto } from './dto/link-data.dto';

@Injectable()
export class LinksService {

  constructor(private backendService: FakeBackendService) { }

  public getLinks$(): Observable<LinkDataInterface[]> {
      return this.backendService.get$<LinkDataDto[]>(linksMock);
  }
}
