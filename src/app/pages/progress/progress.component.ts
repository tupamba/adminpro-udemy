import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styles: []
})
export class ProgressComponent implements OnInit {
  progress: number = 0;
  progressGreen: number = 0;
  red="red";
  constructor() {}

  ngOnInit() {}
  
}
