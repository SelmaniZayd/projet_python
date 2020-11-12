import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss']
})
export class QuestionOneComponent implements OnInit {
  
  constructor(private http: HttpClient,
              private airports : ConfigService) { }

    ngOnInit(): void {
    this.airports.getAirports()
      .subscribe((data : any) => { console.log(data);
    });
    this.airports.getAirlines()
    .subscribe((data : any) => { console.log(data);
    });
    this.airports.getDestination()
    .subscribe((data : any) => { console.log(data); 
    });
    this.airports.getTimeZone()
    .subscribe((data : any) => { console.log(data);
    });
    this.airports.getPlanes()
    .subscribe((data : any) => { console.log(data);
    });

  }


}
