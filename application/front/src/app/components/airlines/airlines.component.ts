import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Airport } from 'src/app/models/airport';
import { ConfigService } from 'src/app/services/config.service';
import { TransformService } from 'src/app/services/transform.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  data: MatTableDataSource<Airport>;
  columns: string[];

  constructor(private configService: ConfigService, private transform: TransformService) {

  }

  ngOnInit(): void {
    this.configService.getAirlines().subscribe(async res => {
      this.data = new MatTableDataSource<Airport>(res);
      setTimeout(() => this.columns = this.transform.get_columns_from_json(res))
    });

  }

}
