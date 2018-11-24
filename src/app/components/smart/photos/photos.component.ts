import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
