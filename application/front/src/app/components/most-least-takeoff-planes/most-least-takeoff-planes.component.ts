import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigService } from 'src/app/services/config.service';
import { TransformService } from 'src/app/services/transform.service';

@Component({
  selector: 'app-most-least-takeoff-planes',
  templateUrl: './most-least-takeoff-planes.component.html',
  styleUrls: ['./most-least-takeoff-planes.component.scss']
})
export class MostLeastTakeoffPlanesComponent implements OnInit {

  data: any[];
  data_for_table: MatTableDataSource<any>;
  columns: string[];

  data2: any[];
  data_for_table2: MatTableDataSource<any>;
  columns2: string[];

  constructor(private config: ConfigService, private trans: TransformService) { }

  ngOnInit(): void {
    this.config.getMostTakeoffPlanes().subscribe(res => {
      this.data = this.from_json_to_bar_chart(res);
      this.data_for_table = new MatTableDataSource(res);
      setTimeout(() => {
        this.columns = this.trans.get_columns_from_json(res);
      });
    });

    this.config.getLeastTakeoffPlanes().subscribe(res => {
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
      list.push({ name: obj.plane, value: obj.count });
    }
    return list;
  }
}
