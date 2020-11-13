import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouped-bar-chart',
  templateUrl: './grouped-bar-chart.component.html',
  styleUrls: ['./grouped-bar-chart.component.scss']
})
export class GroupedBarChartComponent implements OnInit {

  single: any[];
  @Input() multi: any[];

  view: any[] = [1200, 1500];
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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#000000', '#FF0000', '#00FFFF', '#00FF00', '#0000FF', '#000080']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
