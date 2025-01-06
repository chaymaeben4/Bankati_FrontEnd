import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import {PortefeuillesComponent} from "./portefeuilles/portefeuilles.component";
import { TransfertArgentComponent } from './transfert-argent/transfert-argent.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardCartesComponent } from './cartesVirtuelles/dashboard-cartes/dashboard-cartes.component';
import { CreerCarteComponent } from './cartesVirtuelles/creer-carte/creer-carte.component';
import { DetailsComponent } from './cartesVirtuelles/details/details.component';
import { PaiementComponent } from './cartesVirtuelles/paiement/paiement.component';
import { CreerPaiementRecurrentComponent } from './paiements_recurrents/creer-paiement-recurrent/creer-paiement-recurrent.component';
import {HeaderComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";


@NgModule({
    declarations: [
        SidebarComponent,
        PortefeuillesComponent,
        TransfertArgentComponent,
        DashboardCartesComponent,
        CreerCarteComponent,
        DetailsComponent,
        PaiementComponent,
        CreerPaiementRecurrentComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class ClientModule { }
