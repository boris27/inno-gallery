import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { PathConfig } from '../../config/path.config';
import { FilesComponent } from '../../components/smart/files/files.component';
import { PhotosComponent } from '../../components/smart/photos/photos.component';
import { LinksComponent } from '../../components/smart/links/links.component';
import { SharingComponent } from '../../components/smart/sharing/sharing.component';
import { EventsComponent } from '../../components/smart/events/events.component';
import { StartedComponent } from '../../components/smart/started/started.component';

const routes: Routes = [
    {
        path: '', component: GalleryComponent, children: [
            {
                path: PathConfig.FILES, component: FilesComponent,
            },
            {
                path: PathConfig.PHOTOS, component: PhotosComponent,
            },
            {
                path: PathConfig.LINKS, component: LinksComponent,
            },
            {
                path: PathConfig.SHARING, component: SharingComponent,
            },
            {
                path: PathConfig.EVENTS, component: EventsComponent,
            },
            {
                path: PathConfig.GET_STARTED, component: StartedComponent,
            },
            { path: '', redirectTo: PathConfig.PHOTOS, pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GalleryRoutingModule {}
