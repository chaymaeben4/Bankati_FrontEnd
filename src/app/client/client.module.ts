import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import {PortefeuillesComponent} from "./portefeuilles/portefeuilles.component";
import { TransfertArgentComponent } from './transfert-argent/transfert-argent.component';
import { DashboardCartesComponent } from './cartesVirtuelles/dashboard-cartes/dashboard-cartes.component';
import { CreerCarteComponent } from './cartesVirtuelles/creer-carte/creer-carte.component';
import { DetailsComponent } from './cartesVirtuelles/details/details.component';
import { PaiementComponent } from './cartesVirtuelles/paiement/paiement.component';
import { CreerPaiementRecurrentComponent } from './paiements_recurrents/creer-paiement-recurrent/creer-paiement-recurrent.component';
import {AppModule} from "../app.module";
import {FooterComponent} from "./shared/footer/footer.component";
import {HeaderComponent} from './shared/header/header.component';
import { DepensesComponent } from './depenses/depenses.component';
import { CreateDepenseComponent } from './create-depense/create-depense.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import { AlimenterDepenseComponent } from './alimenter-depense/alimenter-depense.component';
import { CreatePortefeuilleComponent } from './create-portefeuille/create-portefeuille.component';
import { AlimenterPortefeuilleComponent } from './alimenter-portefeuille/alimenter-portefeuille.component';
import {PortefeuilleListComponent} from "./portefeuille-list/portefeuille-list.component";
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './paiements_recurrents/dashboard/dashboard.component';


@NgModule({
  declarations: [
    SidebarComponent,
    PortefeuillesComponent,
      HeaderComponent,
      FooterComponent,
      TransfertArgentComponent,
      DashboardCartesComponent,
      CreerCarteComponent,
      DetailsComponent,
      PaiementComponent,
      CreerPaiementRecurrentComponent,
      PortefeuilleListComponent,
      DepensesComponent,
      CreateDepenseComponent,
      AlertDialogComponent,
      AlimenterDepenseComponent,
      CreatePortefeuilleComponent,
      AlimenterPortefeuilleComponent,
      NavbarComponent,
      DashboardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
      FormsModule,
    MatDialogModule,
    MatButton,
  ]})
export class ClientModule { }
