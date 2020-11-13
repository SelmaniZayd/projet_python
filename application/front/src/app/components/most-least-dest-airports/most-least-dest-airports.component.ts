import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigService } from 'src/app/services/config.service';
import { TransformService } from 'src/app/services/transform.service';

@Component({
  selector: 'app-most-least-dest-airports',
  templateUrl: './most-least-dest-airports.component.html',
  styleUrls: ['./most-least-dest-airports.component.scss']
})
export class MostLeastDestAirportsComponent implements OnInit {

  data: any[];
  data_for_table: MatTableDataSource<any>;
  columns: string[];

  data2: any[];
  data_for_table2: MatTableDataSource<any>;
  columns2: string[];

  constructor(private config: ConfigService, private trans: TransformService) { }

  ngOnInit(): void {
    this.config.getMostDestAirports().subscribe(res => {
      this.data = this.from_json_to_bar_chart(res);
      this.data_for_table = new MatTableDataSource(res);
      setTimeout(() => {
        this.columns = this.trans.get_columns_from_json(res);
      });
    });

    this.config.getLeastDestAirports().subscribe(res => {
      this.data2 = this.from_json_to_bar_chart(res);
      this.data_for_table2 = new MatTableDataSource(res);
      setTimeout(() => {
        this.columns2 = this.trans.get_columns_from_json(res);
      });
    });

  }

  from_json_to_bar_chart(json) {
    const list = [];
    for (const obj of json) {
      list.push({ name: obj.airport, value: obj.count });
    }
    return list;
  }
}
