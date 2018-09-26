import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartViewComponent implements OnInit {
  @Input() public pieChartLabels:string[] = [];
  @Input() public pieChartData:number[] = [];
  @Input() public pieChartType:string = '';
  @Input() public title:string = '';
  constructor() { }

  ngOnInit() {
  }

}
