import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() single: any[];
  view: any[] = [1000, 500];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#000000', '#FF0000','#00FFFF', '#00FF00', '#0000FF', '#000080']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
