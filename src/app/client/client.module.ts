import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PaiementMultiDeviseComponent } from './paiement-multi-devise/paiement-multi-devise.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {PortefeuillesComponent} from "./portefeuilles/portefeuilles.component";
import {AppModule} from "../app.module";
import {FooterComponent} from "./shared/footer/footer.component";
import { PortefeuilleListComponent } from './portefeuille-list/portefeuille-list.component';
import {HeaderComponent} from './shared/header/header.component';
import { DepensesComponent } from './depenses/depenses.component';
import { CreateDepenseComponent } from './create-depense/create-depense.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import { AlimenterDepenseComponent } from './alimenter-depense/alimenter-depense.component';
import { CreatePortefeuilleComponent } from './create-portefeuille/create-portefeuille.component';
import { AlimenterPortefeuilleComponent } from './alimenter-portefeuille/alimenter-portefeuille.component';


@NgModule({
  declarations: [
    PaiementMultiDeviseComponent,
    SidebarComponent,
    PortefeuillesComponent,
      HeaderComponent,
      FooterComponent,
      PortefeuilleListComponent,
      DepensesComponent,
      CreateDepenseComponent,
      AlertDialogComponent,
      AlimenterDepenseComponent,
      CreatePortefeuilleComponent,
      AlimenterPortefeuilleComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButton,

  ]
})
export class ClientModule { }
