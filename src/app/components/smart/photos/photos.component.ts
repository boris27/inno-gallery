import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ImageDataInterface } from '../../../models/image-data.interface';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SortingTypes } from '../../../config/image-sort/enums/sorting.types.enum';
import { ImageSortConfig } from '../../../config/image-sort/image-sort.config';
import { ImagesService } from '../../../services/images/images.service';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosComponent implements OnInit {

    public images$: Observable<ImageDataInterface[]>;
    public filterType$ = new BehaviorSubject<string>(SortingTypes.DEFAULT);

    constructor(private imagesService: ImagesService) {}

    ngOnInit() {
        this.images$ = combineLatest(
            this.imagesService.getImages(),
            this.filterType$,
        ).pipe(
            map(([imagesArr, filterType]: [ImageDataInterface[], string]) => this.filterImages(imagesArr, filterType))
        );
    }

    public filterByName(): void {
        this.filterType$.next(SortingTypes.NAME);
    }

    public filterBySize(): void {
        this.filterType$.next(SortingTypes.SIZE);
    }

    public filterByModifiedDate(): void {
        this.filterType$.next(SortingTypes.MODIFIED);
    }

    private filterImages(images: ImageDataInterface[], filterType: string): ImageDataInterface[] {
        return images.sort(ImageSortConfig.SORT_FUNC[filterType]);
    }

}
