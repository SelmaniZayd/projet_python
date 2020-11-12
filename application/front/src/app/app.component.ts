import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front';
  airlines = [];

 constructor(
   private http: HttpClient
 ) {

 }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/').subscribe((res: string) => {
      console.log(res);
      
      this.title = res;
    });

  }
}
