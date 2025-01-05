import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AgentModule} from "./agent/agent.module";
import { HeaderComponent } from './home-page/shared/header/header.component';
import { FooterComponent } from './home-page/shared/footer/footer.component';
import { SliderComponent } from './home-page/slider/slider.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {ClientModule} from "./client/client.module";


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
        ReactiveFormsModule
    ],
    providers: [
      DatePipe,
      HttpClientModule,
      BrowserAnimationsModule,
      FormsModule,
      provideAnimationsAsync(),
      ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
