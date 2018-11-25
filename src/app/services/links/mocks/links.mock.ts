import {LinkDataInterface} from '../../../models/link-data.interface';
import {PathConfig} from '../../../config/path.config';

export const linksMock: LinkDataInterface[] = [
    {
        icon: 'green',
        path: PathConfig.FILES,
        linkText: PathConfig.FILES,
        counter: null,
    },
    {
        icon: 'blue',
        path: PathConfig.PHOTOS,
        linkText: PathConfig.PHOTOS,
        counter: 14,
    },
    {
        icon: 'yellow',
        path: PathConfig.SHARING,
        linkText: PathConfig.SHARING,
        counter: 0,
    },
    {
        icon: 'black',
        path: PathConfig.LINKS,
        linkText: PathConfig.LINKS,
        counter: null,
    },
    {
        icon: 'white',
        path: PathConfig.EVENTS,
        linkText: PathConfig.EVENTS,
        counter: 5,
    },
    {
        icon: 'wheat',
        path: PathConfig.GET_STARTED,
        linkText: PathConfig.GET_STARTED,
        counter: 5,
    },
];
