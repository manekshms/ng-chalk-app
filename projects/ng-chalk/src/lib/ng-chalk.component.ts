import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgChalkTemplate } from './template/ng-chalk-template';
import { NgChalkService } from './ng-chalk.service';

@Component({
  selector: 'ng-chalk',
  templateUrl: './ng-chalk.component.html',
  styleUrls: ['./ng-chalk.component.scss']
})
export class NgChalkComponent implements OnInit {

  @Input('color') color;
  @Input('borderVal') border;
  @Input('borderRadius') borderRadius;
  @Input('bg') bg;
  @Input("template") templateName:String;
  @Input("padding") padding:String;
  @ViewChild("container", null) container: ElementRef;

  private template:NgChalkTemplate;

  constructor(private ngChalkService:NgChalkService) {
  }

  private initialize () {
    this.template = this.ngChalkService.getTemplateByName(this.templateName);
    this.color = this.color || (this.template && this.template.color? this.template.color : "");
    this.bg = this.bg || (this.template && this.template.bg ? this.template.bg : "");
    this.border = this.border || (this.template && this.template.borderVal ? this.template.borderVal : "");
    this.borderRadius = this.borderRadius || (this.template && this.template.borderRadius ? this.template.borderRadius : "");
    this.padding = this.padding || (this.template && this.template.padding ? this.template.padding : "");
  }

  ngOnInit() {
    this.initialize();
    this.container.nativeElement.style.color = this.color;
    this.container.nativeElement.style.border = this.border;
    this.container.nativeElement.style.borderRadius = this.borderRadius;
    this.container.nativeElement.style.background = this.bg;
    this.container.nativeElement.style.padding = this.padding || this.ngChalkService.getDefaultPadding();
  }

}
