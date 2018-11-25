import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class FakeBackendService {
    public get<T>(itemsForEmit: T): Observable<T> {
        return of(itemsForEmit).pipe(
            delay(Math.round(Math.random() * 1500)),
        );
    }
}
