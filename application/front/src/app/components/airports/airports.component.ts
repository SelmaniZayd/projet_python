import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Airport } from 'src/app/models/airport';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  data: MatTableDataSource<Airport>;
  columns: string[];

  constructor(private configService: ConfigService) {
    
  }

  ngOnInit(): void {
    this.configService.getPlanes().subscribe(async res => {
      this.data = new MatTableDataSource<Airport>(res);
      setTimeout(() => this.columns = this.get_columns_from_json(res))
    });
  }

  get_columns_from_json(json) {
    const list = [];
    for (const key in json[0]) {
      list.push(key);
    }
    return list
  }

}


