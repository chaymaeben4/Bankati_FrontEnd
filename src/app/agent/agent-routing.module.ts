import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreerClientComponent} from "./creer-client/creer-client.component";

const routes: Routes = [
  {path : 'creer-compte-client' , component : CreerClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
