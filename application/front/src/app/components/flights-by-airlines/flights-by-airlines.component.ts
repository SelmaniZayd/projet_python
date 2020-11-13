import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigService } from 'src/app/services/config.service';
import { TransformService } from 'src/app/services/transform.service';

@Component({
  selector: 'app-flights-by-airlines',
  templateUrl: './flights-by-airlines.component.html',
  styleUrls: ['./flights-by-airlines.component.scss']
})
export class FlightsByAirlinesComponent implements OnInit {

  data: any[];
  data_for_table: MatTableDataSource<any>;
  columns: string[];

  constructor(private config: ConfigService, private trans: TransformService) { }

  ngOnInit(): void {
    this.config.getFlightsByAirlines().subscribe(res => {
      this.data = this.from_json_to_bar_chart(res);
      this.data_for_table = new MatTableDataSource(res);
      setTimeout(() => {
        this.columns = this.trans.get_columns_from_json(res);
      });
    });
  }

  from_json_to_bar_chart(json) {
    const list = [];
    for (const obj of json) {
      list.push({ name: obj.carrier, value: obj.count });
    }
    return list;
  }

}