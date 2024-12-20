import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaiementMultiDeviseComponent} from "./paiement-multi-devise/paiement-multi-devise.component";
import {PortefeuillesComponent} from "./portefeuilles/portefeuilles.component";

const routes: Routes = [
  {path : 'paiement-MultiDevise' , component : PaiementMultiDeviseComponent},
  {path : 'portefeuilles' , component : PortefeuillesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
