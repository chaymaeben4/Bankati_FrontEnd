import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
  },
  {
    path: 'agent',
    loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule),
  },
  {
    path: '', component : HomePageComponent
  },
  {
    path: '**',
    redirectTo: '/client',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
