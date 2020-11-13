import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlinesComponent } from './components/airlines/airlines.component';
import { AirportsComponent } from './components/airports/airports.component';
import { FlightsByOriginByAirlineComponent } from './components/flights-by-origin-by-airline/flights-by-origin-by-airline.component';
import { FlightsComponent } from './components/flights/flights.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PlanesComponent } from './components/planes/planes.component';
import { WeatherPerAirportComponent } from './components/weather-per-airport/weather-per-airport.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'airport', component: AirportsComponent},
  { path: 'weather_airport', component: WeatherPerAirportComponent},
  { path: 'airlines', component: AirlinesComponent},
  { path: 'planes', component: PlanesComponent},
  { path: 'weather', component: WeatherComponent},
  { path: 'flights', component: FlightsComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
