import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {ClientModule} from "./client/client.module";
import {AgentModule} from "./agent/agent.module";
import { HeaderComponent } from './home-page/shared/header/header.component';
import { FooterComponent } from './home-page/shared/footer/footer.component';
import { SliderComponent } from './home-page/slider/slider.component';
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        HeaderComponent,
        FooterComponent,
        SliderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ClientModule,
        AgentModule,
      HttpClientModule,
      BrowserAnimationsModule,
      FormsModule,

    ],
    providers: [
    provideAnimationsAsync()
  ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
