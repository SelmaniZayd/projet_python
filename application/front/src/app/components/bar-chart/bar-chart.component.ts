import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() single: any[];
  multi: any[];

  view: any[] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  @Input() xAxisLabel: string;
  showYAxisLabel = true;
  @Input() yAxisLabel: string;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#000000', '#FF0000','#00FFFF', '#00FF00', '#0000FF', '#000080']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
