import { Component, ChangeDetectionStrategy, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ImageDataInterface } from '../../../models/image-data.interface';
import { byteMetricTransform } from '../../../helpers/byte-metric.helper';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent implements OnChanges {

    @Input() imageData: ImageDataInterface;

    public name: string;
    public url: string;
    public size: string;

    ngOnChanges({imageData}: SimpleChanges): void {
        if (imageData && imageData.currentValue) {
            const {name, url, fileSize} = this.imageData;

            this.name = name;
            this.url = url;
            this.size = byteMetricTransform(fileSize);
        }
    }
}
