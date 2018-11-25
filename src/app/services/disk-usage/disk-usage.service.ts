import { Injectable } from '@angular/core';
import { FakeBackendService } from '../fake-backend/fake-backend.service';
import { Observable } from 'rxjs';
import { DiskUsageInterface } from '../../models/disk-usage.interface';
import { diskUsageMock } from './mocks/disk-usage.mock';
import { DiskUsageDto } from './dto/disk-usage.dto';

@Injectable()
export class DiskUsageService {

  constructor(private backendService: FakeBackendService) { }

  public getDiskUsage(): Observable<DiskUsageInterface> {
      return this.backendService.get<DiskUsageDto>(diskUsageMock);
  }
}
