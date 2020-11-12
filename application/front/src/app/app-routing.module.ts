import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportsComponent } from './components/airports/airports.component';
import { FlightsByAirlinesComponent } from './components/flights-by-airlines/flights-by-airlines.component';
import { MostLeastDestAirportsComponent } from './components/most-least-dest-airports/most-least-dest-airports.component';
import { MostLeastTakeoffPlanesComponent } from './components/most-least-takeoff-planes/most-least-takeoff-planes.component';

const routes: Routes = [
  { path: '', component: MostLeastDestAirportsComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
