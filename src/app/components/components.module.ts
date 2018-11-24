import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './smart/files/files.component';
import { PhotosComponent } from './smart/photos/photos.component';
import { SharingComponent } from './smart/sharing/sharing.component';
import { LinksComponent } from './smart/links/links.component';
import { EventsComponent } from './smart/events/events.component';
import { StartedComponent } from './smart/started/started.component';
import { SidePanelComponent } from './smart/side-panel/side-panel.component';
import { MenuLinkComponent } from './dumb/menu-link/menu-link.component';
import { RouterModule} from '@angular/router';
import { DiskUsageProgressComponent } from './dumb/disk-usage-progress/disk-usage-progress.component';

const COMPONENTS_LIST = [
    FilesComponent,
    PhotosComponent,
    SharingComponent,
    LinksComponent,
    EventsComponent,
    StartedComponent,
    SidePanelComponent,
    MenuLinkComponent,
    DiskUsageProgressComponent,
];

@NgModule({
    declarations: [
        ...COMPONENTS_LIST,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        ...COMPONENTS_LIST,
    ]
})
export class ComponentsModule { }
