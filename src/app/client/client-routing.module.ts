import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortefeuillesComponent} from "./portefeuilles/portefeuilles.component";
import {TransfertArgentComponent} from "./transfert-argent/transfert-argent.component";
import {DashboardCartesComponent} from "./cartesVirtuelles/dashboard-cartes/dashboard-cartes.component";
import {CreerCarteComponent} from "./cartesVirtuelles/creer-carte/creer-carte.component";
import {DetailsComponent} from "./cartesVirtuelles/details/details.component";
import {PaiementComponent} from "./cartesVirtuelles/paiement/paiement.component";
import {
  CreerPaiementRecurrentComponent
} from "./paiements_recurrents/creer-paiement-recurrent/creer-paiement-recurrent.component";

const routes: Routes = [
  {path : 'transfert_argent' , component : TransfertArgentComponent},
  {path : 'portefeuilles' , component : PortefeuillesComponent},
  {path : 'mes-cartes-virtuelles' , component : DashboardCartesComponent},
  {path : 'creer-carte' , component : CreerCarteComponent},
  {path : 'carte-details/:cvv' , component : DetailsComponent},
  {path : 'paiement' , component : PaiementComponent},
  {path : 'generer-paiement-recurrent' , component : CreerPaiementRecurrentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
