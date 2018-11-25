import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { LinkDataInterface } from '../../../models/link-data.interface';
import { DiskUsageInterface } from '../../../models/disk-usage.interface';
import { LinksService } from '../../../services/links/links.service';
import { Observable } from 'rxjs';
import { DiskUsageService } from '../../../services/disk-usage/disk-usage.service';

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidePanelComponent implements OnInit {

    public links$: Observable<LinkDataInterface[]>;
    public diskUsage$: Observable<DiskUsageInterface>;

    constructor(private linksService: LinksService,
                private diskUsageService: DiskUsageService) {}

    ngOnInit(): void {
        this.links$ = this.linksService.getLinks$();
        this.diskUsage$ = this.diskUsageService.getDiskUsage$();
    }

    public upgradeAccount(): void {
        console.log('click on upgradeAccount button');
    }
}
