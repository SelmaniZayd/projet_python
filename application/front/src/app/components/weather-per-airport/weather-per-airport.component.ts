import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/material-module';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-weather-per-airport',
  templateUrl: './weather-per-airport.component.html',
  styleUrls: ['./weather-per-airport.component.scss']
})
export class WeatherPerAirportComponent implements OnInit {

  data :any[];

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getWeatherByOrigin().subscribe(res => {
      this.data = this.from_json_to_bar_chart(res);
    });
  }

  from_json_to_bar_chart(json) {
    const list = [];
    let currentCompany = json[0].origin;
    let series = [];

    for (const obj of json) {
      if (currentCompany != obj.origin) {
        list.push({ name: currentCompany, series: series });
        currentCompany = obj.origin;
        series = [];
      }

      series.push({ name: obj.month, value: +obj.count });

    }
    list.push({ name: currentCompany, series: series });
    return list;
  }

}
