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
import {ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import { AproposComponent } from './home-page/apropos/apropos.component';
import { ServicesComponent } from './home-page/services/services.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        HeaderComponent,
        FooterComponent,
        SliderComponent,
        AproposComponent,
        ServicesComponent,
        LoginComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ClientModule,
        AgentModule,
        HttpClientModule,
        ReactiveFormsModule,

    ],
    providers: [DatePipe],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
