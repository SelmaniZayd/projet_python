import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportsComponent } from './components/airports/airports.component';
import { FlightsByAirlinesComponent } from './components/flights-by-airlines/flights-by-airlines.component';

const routes: Routes = [
  { path: '', component: FlightsByAirlinesComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
