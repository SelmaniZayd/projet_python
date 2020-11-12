import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front';



 constructor(
   private http: HttpClient,
   private airports : ConfigService
 ) {

 }

  ngOnInit(): void {
    

  }
}

