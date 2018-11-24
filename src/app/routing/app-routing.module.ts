import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../layouts/main/main.component';
import { PathConfig } from '../config/path.config';

const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path: PathConfig.GALLERY, loadChildren: '../pages/gallery/gallery.module#GalleryModule',
            },
            { path: '', redirectTo: PathConfig.GALLERY, pathMatch: 'full' },
        ],
    },
    {
        path: PathConfig.ANY, redirectTo: '',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {
}
