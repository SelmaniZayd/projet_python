import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {

 @Input() single: any[];
  view: any[] = [1200, 500];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  @Input() xAxisLabel: string;
  @Input() yAxisLabel: string;
  timeline: boolean = true;

  colorScheme = {
    domain: ['#FCFF33', '#00DE49', '#FB9BF2']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
