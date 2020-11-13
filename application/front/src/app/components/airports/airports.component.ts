import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Airport } from 'src/app/models/airport';
import { ConfigService } from 'src/app/services/config.service';
import { TransformService } from 'src/app/services/transform.service';

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

  constructor(private configService: ConfigService, private transform: TransformService) {
    
  }

  ngOnInit(): void {
    this.configService.getAirports().subscribe(async res => {
      this.data = new MatTableDataSource<Airport>(res);
      setTimeout(() => this.columns = this.transform.get_columns_from_json(res))
    });
  }


}


