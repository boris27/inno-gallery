import { ImageDataInterface } from '../../models/image-data.interface';
import { SortingTypes } from './enums/sorting.types.enum';

export class ImageSortConfig {
    public static get SORT_FUNC(): Record<string, (a?: ImageDataInterface, b?: ImageDataInterface) => number> {
        return {
            [SortingTypes.DEFAULT]: () => 0,
            [SortingTypes.NAME]: (a: ImageDataInterface, b: ImageDataInterface) => a.name > b.name ? 1 : -1,
            [SortingTypes.SIZE]: (a: ImageDataInterface, b: ImageDataInterface) => a.fileSize - b.fileSize,
            [SortingTypes.MODIFIED]: (a: ImageDataInterface, b: ImageDataInterface) => a.lastModified - b.lastModified,
        };
    }
}
