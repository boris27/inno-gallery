import {Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LinkDataInterface} from '../../../models/link-data.interface';

@Component({
    selector: 'app-menu-link',
    templateUrl: './menu-link.component.html',
    styleUrls: ['./menu-link.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLinkComponent implements OnChanges {
    @Input() linkData: LinkDataInterface;

    public icon: string;
    public linkUrl: string;
    public linkText: string;
    public counter: number;

    ngOnChanges({linkData}: SimpleChanges): void {
        if (linkData && linkData.currentValue) {
            const {icon, path, linkText, counter} = this.linkData;

            this.icon = icon;
            this.linkUrl = path;
            this.linkText = linkText;
            this.counter = counter;
        }
    }
}
