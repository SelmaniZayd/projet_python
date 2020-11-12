import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnConfig } from 'material-dynamic-table';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  data: object[] = [];

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getAirports().subscribe(res => this.data = res);
  }

  columns: ColumnConfig[] = [
    {
      name: 'faa',
      displayName: 'faa',
      type: 'string'
    },
    {
      name: 'name',
      displayName: 'name',
      type: 'string'
    },
    {
      name: 'lat',
      displayName: 'lat',
      type: 'number'
    },
    {
      name: 'lon',
      displayName: 'lon',
      type: 'number'
    },
    {
      name: 'tz',
      displayName: 'tz',
      type: 'number'
    },
    {
      name: 'dst',
      displayName: 'dst',
      type: 'string'
    },
    {
      name: 'tzone',
      displayName: 'tzone',
      type: 'string'
    }
  ];


  dataSource = new MatTableDataSource<object>(this.data);
}
