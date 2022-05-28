import { MerlinApiService } from './merlin-api.service';
import { ApiModule } from './../../api/api.module';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ConfigstepComponent } from './configstep/configstep.component';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatTabsModule} from '@angular/material/tabs';
import { InfoboxComponent } from './infobox/infobox/infobox.component';
import { AppRoutingModule } from './app-routing.module';
import { PortalButtonModule } from '@portal/ui-kit/button';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonrowComponent } from './buttonrow/buttonrow.component';
import { ToprowComponent } from './toprow/toprow.component';
import { MaterialExampleModule } from 'src/material.module';
import { ImageComponent } from './imagearea/imagearea.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ToggleComponent } from './toggle/toggle.component';
import { SliderComponent } from './slider/slider.component';
import { OverviewComponent } from './overview/overview.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { EndbuttonrowComponent } from './endbuttonrow/endbuttonrow.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoboxComponent,
    ButtonrowComponent,
    ToprowComponent,
    ConfigstepComponent,
    ImageComponent,
    FrontpageComponent,
    ProgressbarComponent,
    CarouselComponent,
    ToggleComponent,
    SliderComponent,
    OverviewComponent,
    EndbuttonrowComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    PortalButtonModule,
    ApiModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MaterialExampleModule,
    MatDividerModule,
    MatProgressBarModule,
    LayoutModule,
    MatSliderModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [MerlinApiService],
  bootstrap: [AppComponent, FrontpageComponent]
})
export class AppModule{
 }
