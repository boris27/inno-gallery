import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
