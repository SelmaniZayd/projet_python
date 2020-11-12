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


@NgModule({
  declarations: [
    AppComponent,
    QuestionOneComponent,
    AirportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    DynamicTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
