import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {HttpClientModule} from "@angular/common/http";
import { QuestionOneComponent } from './components/question-one/question-one.component';
import { MaterialModule } from './material-module';
import { DynamicTableModule } from 'material-dynamic-table';
import { AirportsComponent } from './components/airports/airports.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { FlightsComponent } from './components/flights/flights.component';
import { AirlinesComponent } from './components/airlines/airlines.component';
import { PlanesComponent } from './components/planes/planes.component';
import { QueryExecuterComponent } from './components/query-executer/query-executer.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { FlightsByAirlinesComponent } from './components/flights-by-airlines/flights-by-airlines.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionOneComponent,
    AirportsComponent,
    TableComponent,
    HeaderComponent,
    FlightsComponent,
    AirlinesComponent,
    PlanesComponent,
    QueryExecuterComponent,
    BarChartComponent,
    FlightsByAirlinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    DynamicTableModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
