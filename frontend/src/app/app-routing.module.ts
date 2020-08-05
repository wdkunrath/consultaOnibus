import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers';

import { HomeComponent } from '@app/views/home';
import { LoginComponent } from '@app/views/login';
import { LotacaoComponent } from "@app/views/lotacao/lotacao.component";
import { LotacaoItinerarioComponent } from '@components/lotacao/lotacao-itinerario/lotacao-itinerario.component';
import { OnibusComponent } from "@app/views/onibus/onibus.component";
import { OnibusItinerarioComponent } from '@components/onibus/onibus-itinerario/onibus-itinerario.component'


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: "lotacao",component: LotacaoComponent, canActivate: [AuthGuard]},
  {path: "lotacao/lotacao-itinerario/:id",component: LotacaoItinerarioComponent, canActivate: [AuthGuard]},
  {path: "onibus",component: OnibusComponent, canActivate: [AuthGuard]},
  {path: "onibus/onibus-itinerario/:id",component: OnibusItinerarioComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
