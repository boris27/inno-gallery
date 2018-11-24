import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LinkDataInterface } from '../../../models/link-data.interface';
import { PathConfig } from '../../../config/path.config';
import {DiskUsageInterface} from '../../../models/disk-usage.interface';

const panelLinks: LinkDataInterface[] = [
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

const diskUsage: DiskUsageInterface = {
    currentUsageByte: 12139012309,
    totalUsageByte: 125634651424,
};

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidePanelComponent {

    public links: LinkDataInterface[] = panelLinks;
    public diskUsage: DiskUsageInterface = diskUsage;

    public upgradeAccount(): void {
        console.log('click on upgradeAccount button');
    }
}
