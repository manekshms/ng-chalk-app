import { OnInit, ElementRef } from '@angular/core';
import { NgChalkService } from './ng-chalk.service';
export declare class NgChalkComponent implements OnInit {
    private ngChalkService;
    color: any;
    border: any;
    borderRadius: any;
    bg: any;
    templateName: String;
    padding: String;
    container: ElementRef;
    private template;
    constructor(ngChalkService: NgChalkService);
    private initialize;
    ngOnInit(): void;
}
