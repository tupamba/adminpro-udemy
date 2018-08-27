import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-increment",
  templateUrl: "./increment.component.html",
  styles: []
})
export class IncrementComponent implements OnInit {
  @Input()
  caption: string = "Caption";
  @Input()
  progress: number = 0;
  @Output()
  progressEvent = new EventEmitter();
  @ViewChild('txtProgress') txtProgess: ElementRef;
  constructor() {}

  ngOnInit() {}
  onChnage(value) {
    if (this.progress >= 100 && value > 0) this.progress = 100;
    else if (this.progress <= 0 && value < 0) this.progress = 0;

    this.txtProgess.nativeElement.value = this.progress;
    this.progressEvent.emit(this.progress);
    this.txtProgess.nativeElement.focus();
  }
  changeValue(value) {
    if (
      (this.progress >= 100 && value > 0) ||
      (this.progress <= 0 && value < 0)
    )
      return;
    this.progress = this.progress + value;
    this.progressEvent.emit(this.progress);
  }
}
