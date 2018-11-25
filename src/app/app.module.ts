import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './layouts/main/main.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { ComponentsModule } from './components/components.module';
import { FakeBackendService } from './services/fake-backend/fake-backend.service';
import { ImagesService } from './services/images/images.service';
import { LinksService } from './services/links/links.service';
import { DiskUsageService } from './services/disk-usage/disk-usage.service';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
    ],
    providers: [
        FakeBackendService,
        ImagesService,
        LinksService,
        DiskUsageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
