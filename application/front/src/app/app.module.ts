import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuestionOneComponent } from './question-one/question-one.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";





import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,

    QuestionOneComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
 

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
