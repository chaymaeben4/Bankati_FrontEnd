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
import {PortefeuilleListComponent} from "./portefeuille-list/portefeuille-list.component";
import {DepensesComponent} from "./depenses/depenses.component";
import {CreateDepenseComponent} from "./create-depense/create-depense.component";
import {AlimenterDepenseComponent} from "./alimenter-depense/alimenter-depense.component";
import {CreatePortefeuilleComponent} from "./create-portefeuille/create-portefeuille.component";
import {AlimenterPortefeuilleComponent} from "./alimenter-portefeuille/alimenter-portefeuille.component";
import {DashboardComponent} from "./paiements_recurrents/dashboard/dashboard.component";


const routes: Routes = [
  {path : 'transfert_argent' , component : TransfertArgentComponent},
  {path : '' , component : PortefeuillesComponent},
  {path : 'mes-cartes-virtuelles' , component : DashboardCartesComponent},
  {path : 'creer-carte' , component : CreerCarteComponent},
  {path : 'carte-details/:cvv' , component : DetailsComponent},
  {path : 'paiement' , component : PaiementComponent},
  {path : 'generer-paiement-recurrent' , component : CreerPaiementRecurrentComponent},
  {path : 'portefeuilleslist',component:PortefeuilleListComponent},
  {path:'depenses',component: DepensesComponent},
  {path:'createDepense',component: CreateDepenseComponent},
  {path:'alimenterDepense/:id',component: AlimenterDepenseComponent},
  {path:'createPortefeuille',component: CreatePortefeuilleComponent},
  {path:'alimenterPortefeuille/:id/:devise',component: AlimenterPortefeuilleComponent},
  {path: 'paiements_recurrents' , component : DashboardComponent}
  ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
