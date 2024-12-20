import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PaiementMultiDeviseComponent } from './paiement-multi-devise/paiement-multi-devise.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {PortefeuillesComponent} from "./portefeuilles/portefeuilles.component";
import {AppModule} from "../app.module";
import {HeaderComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";


@NgModule({
  declarations: [
    PaiementMultiDeviseComponent,
    SidebarComponent,
    PortefeuillesComponent,
      HeaderComponent,
      FooterComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
