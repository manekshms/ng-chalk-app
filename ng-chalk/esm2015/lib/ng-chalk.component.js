/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgChalkService } from './ng-chalk.service';
export class NgChalkComponent {
    /**
     * @param {?} ngChalkService
     */
    constructor(ngChalkService) {
        this.ngChalkService = ngChalkService;
    }
    /**
     * @private
     * @return {?}
     */
    initialize() {
        this.template = this.ngChalkService.getTemplateByName(this.templateName);
        this.color = this.color || (this.template && this.template.color ? this.template.color : "");
        this.bg = this.bg || (this.template && this.template.bg ? this.template.bg : "");
        this.border = this.border || (this.template && this.template.borderVal ? this.template.borderVal : "");
        this.borderRadius = this.borderRadius || (this.template && this.template.borderRadius ? this.template.borderRadius : "");
        this.padding = this.padding || (this.template && this.template.padding ? this.template.padding : "");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initialize();
        this.container.nativeElement.style.color = this.color;
        this.container.nativeElement.style.border = this.border;
        this.container.nativeElement.style.borderRadius = this.borderRadius;
        this.container.nativeElement.style.background = this.bg;
        this.container.nativeElement.style.padding = this.padding || this.ngChalkService.getDefaultPadding();
    }
}
NgChalkComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-chalk',
                template: "<span #container >\n    <ng-content></ng-content>\n</span>",
                styles: [""]
            }] }
];
/** @nocollapse */
NgChalkComponent.ctorParameters = () => [
    { type: NgChalkService }
];
NgChalkComponent.propDecorators = {
    color: [{ type: Input, args: ['color',] }],
    border: [{ type: Input, args: ['borderVal',] }],
    borderRadius: [{ type: Input, args: ['borderRadius',] }],
    bg: [{ type: Input, args: ['bg',] }],
    templateName: [{ type: Input, args: ["template",] }],
    padding: [{ type: Input, args: ["padding",] }],
    container: [{ type: ViewChild, args: ["container", null,] }]
};
if (false) {
    /** @type {?} */
    NgChalkComponent.prototype.color;
    /** @type {?} */
    NgChalkComponent.prototype.border;
    /** @type {?} */
    NgChalkComponent.prototype.borderRadius;
    /** @type {?} */
    NgChalkComponent.prototype.bg;
    /** @type {?} */
    NgChalkComponent.prototype.templateName;
    /** @type {?} */
    NgChalkComponent.prototype.padding;
    /** @type {?} */
    NgChalkComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    NgChalkComponent.prototype.template;
    /**
     * @type {?}
     * @private
     */
    NgChalkComponent.prototype.ngChalkService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhbGsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hhbGsvIiwic291cmNlcyI6WyJsaWIvbmctY2hhbGsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9wRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBWTNCLFlBQW9CLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO0lBQ2pELENBQUM7Ozs7O0lBRU8sVUFBVTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6SCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDdkcsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsc0VBQXdDOzthQUV6Qzs7OztZQU5RLGNBQWM7OztvQkFTcEIsS0FBSyxTQUFDLE9BQU87cUJBQ2IsS0FBSyxTQUFDLFdBQVc7MkJBQ2pCLEtBQUssU0FBQyxjQUFjO2lCQUNwQixLQUFLLFNBQUMsSUFBSTsyQkFDVixLQUFLLFNBQUMsVUFBVTtzQkFDaEIsS0FBSyxTQUFDLFNBQVM7d0JBQ2YsU0FBUyxTQUFDLFdBQVcsRUFBRSxJQUFJOzs7O0lBTjVCLGlDQUFzQjs7SUFDdEIsa0NBQTJCOztJQUMzQix3Q0FBb0M7O0lBQ3BDLDhCQUFnQjs7SUFDaEIsd0NBQXVDOztJQUN2QyxtQ0FBaUM7O0lBQ2pDLHFDQUFvRDs7Ozs7SUFFcEQsb0NBQWlDOzs7OztJQUVyQiwwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDaGFsa1RlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS9uZy1jaGFsay10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBOZ0NoYWxrU2VydmljZSB9IGZyb20gJy4vbmctY2hhbGsuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWNoYWxrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25nLWNoYWxrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmctY2hhbGsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0NoYWxrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ2NvbG9yJykgY29sb3I7XG4gIEBJbnB1dCgnYm9yZGVyVmFsJykgYm9yZGVyO1xuICBASW5wdXQoJ2JvcmRlclJhZGl1cycpIGJvcmRlclJhZGl1cztcbiAgQElucHV0KCdiZycpIGJnO1xuICBASW5wdXQoXCJ0ZW1wbGF0ZVwiKSB0ZW1wbGF0ZU5hbWU6U3RyaW5nO1xuICBASW5wdXQoXCJwYWRkaW5nXCIpIHBhZGRpbmc6U3RyaW5nO1xuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIsIG51bGwpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIHRlbXBsYXRlOk5nQ2hhbGtUZW1wbGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nQ2hhbGtTZXJ2aWNlOk5nQ2hhbGtTZXJ2aWNlKSB7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUgKCkge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLm5nQ2hhbGtTZXJ2aWNlLmdldFRlbXBsYXRlQnlOYW1lKHRoaXMudGVtcGxhdGVOYW1lKTtcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5jb2xvciB8fCAodGhpcy50ZW1wbGF0ZSAmJiB0aGlzLnRlbXBsYXRlLmNvbG9yPyB0aGlzLnRlbXBsYXRlLmNvbG9yIDogXCJcIik7XG4gICAgdGhpcy5iZyA9IHRoaXMuYmcgfHwgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy50ZW1wbGF0ZS5iZyA/IHRoaXMudGVtcGxhdGUuYmcgOiBcIlwiKTtcbiAgICB0aGlzLmJvcmRlciA9IHRoaXMuYm9yZGVyIHx8ICh0aGlzLnRlbXBsYXRlICYmIHRoaXMudGVtcGxhdGUuYm9yZGVyVmFsID8gdGhpcy50ZW1wbGF0ZS5ib3JkZXJWYWwgOiBcIlwiKTtcbiAgICB0aGlzLmJvcmRlclJhZGl1cyA9IHRoaXMuYm9yZGVyUmFkaXVzIHx8ICh0aGlzLnRlbXBsYXRlICYmIHRoaXMudGVtcGxhdGUuYm9yZGVyUmFkaXVzID8gdGhpcy50ZW1wbGF0ZS5ib3JkZXJSYWRpdXMgOiBcIlwiKTtcbiAgICB0aGlzLnBhZGRpbmcgPSB0aGlzLnBhZGRpbmcgfHwgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy50ZW1wbGF0ZS5wYWRkaW5nID8gdGhpcy50ZW1wbGF0ZS5wYWRkaW5nIDogXCJcIik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLmJvcmRlciA9IHRoaXMuYm9yZGVyO1xuICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gdGhpcy5ib3JkZXJSYWRpdXM7XG4gICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5iZztcbiAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSB0aGlzLnBhZGRpbmcgfHwgdGhpcy5uZ0NoYWxrU2VydmljZS5nZXREZWZhdWx0UGFkZGluZygpO1xuICB9XG5cbn1cbiJdfQ==