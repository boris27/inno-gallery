import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {}
