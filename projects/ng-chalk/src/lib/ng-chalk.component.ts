import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-chalk',
  templateUrl: './ng-chalk.component.html',
  styleUrls: ['./ng-chalk.component.scss']
})
export class NgChalkComponent implements OnInit {

  @Input('color') color;
  @Input('borderVal') border;
  @Input('bg') bg;
  @ViewChild("container", null) container: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log(this.border);
    this.container.nativeElement.style.color = this.color;
    this.container.nativeElement.style.border = this.border;
    this.container.nativeElement.style.background = this.bg;
  }

}
