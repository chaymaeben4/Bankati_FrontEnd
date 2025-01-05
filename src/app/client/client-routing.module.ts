import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaiementMultiDeviseComponent} from "./paiement-multi-devise/paiement-multi-devise.component";
import {PortefeuillesComponent} from "./portefeuilles/portefeuilles.component";
import {PortefeuilleListComponent} from "./portefeuille-list/portefeuille-list.component";
import {DepensesComponent} from "./depenses/depenses.component";
import {CreateDepenseComponent} from "./create-depense/create-depense.component";
import {AlimenterDepenseComponent} from "./alimenter-depense/alimenter-depense.component";
import {CreatePortefeuilleComponent} from "./create-portefeuille/create-portefeuille.component";
import {AlimenterPortefeuilleComponent} from "./alimenter-portefeuille/alimenter-portefeuille.component";

const routes: Routes = [
  {path : 'paiement-MultiDevise' , component : PaiementMultiDeviseComponent},
  {path : '' , component : PortefeuillesComponent},
  {path : 'portefeuilleslist',component:PortefeuilleListComponent},
  {path:'depenses',component: DepensesComponent},
  {path:'createDepense',component: CreateDepenseComponent},
  {path:'alimenterDepense/:id',component: AlimenterDepenseComponent},
  {path:'createPortefeuille',component: CreatePortefeuilleComponent},
  {path:'alimenterPortefeuille/:id/:devise',component: AlimenterPortefeuilleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
