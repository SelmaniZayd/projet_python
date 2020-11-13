import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigService } from 'src/app/services/config.service';
import { TransformService } from 'src/app/services/transform.service';

@Component({
  selector: 'app-flights-by-origin-by-airline',
  templateUrl: './flights-by-origin-by-airline.component.html',
  styleUrls: ['./flights-by-origin-by-airline.component.scss']
})
export class FlightsByOriginByAirlineComponent implements OnInit {

  data: any[];
  constructor(private config: ConfigService, private trans: TransformService) { }

  ngOnInit(): void {
    this.config.getFlightsByOriginByAirline().subscribe(res => {
      this.data = this.from_json_to_bar_chart(res);
      console.log(this.data);
      
    });
  }

  from_json_to_bar_chart(json) {
    const list = [];
    let currentCompany = json[0].carrier;
    let series = [];

    for (const obj of json) {
      if (currentCompany != obj.carrier) {
        list.push({ name: currentCompany, series: series });
        currentCompany = obj.carrier;
        series = [];
      }

      series.push({ name: obj.origin, value: +obj.count });

    }
    list.push({ name: currentCompany, series: series });
    return list;
  }

}
/*[
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  }, */