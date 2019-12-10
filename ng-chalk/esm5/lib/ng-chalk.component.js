/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgChalkService } from './ng-chalk.service';
var NgChalkComponent = /** @class */ (function () {
    function NgChalkComponent(ngChalkService) {
        this.ngChalkService = ngChalkService;
    }
    /**
     * @private
     * @return {?}
     */
    NgChalkComponent.prototype.initialize = /**
     * @private
     * @return {?}
     */
    function () {
        this.template = this.ngChalkService.getTemplateByName(this.templateName);
        this.color = this.color || (this.template && this.template.color ? this.template.color : "");
        this.bg = this.bg || (this.template && this.template.bg ? this.template.bg : "");
        this.border = this.border || (this.template && this.template.borderVal ? this.template.borderVal : "");
        this.borderRadius = this.borderRadius || (this.template && this.template.borderRadius ? this.template.borderRadius : "");
        this.padding = this.padding || (this.template && this.template.padding ? this.template.padding : "");
    };
    /**
     * @return {?}
     */
    NgChalkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initialize();
        this.container.nativeElement.style.color = this.color;
        this.container.nativeElement.style.border = this.border;
        this.container.nativeElement.style.borderRadius = this.borderRadius;
        this.container.nativeElement.style.background = this.bg;
        this.container.nativeElement.style.padding = this.padding || this.ngChalkService.getDefaultPadding();
    };
    NgChalkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-chalk',
                    template: "<span #container >\n    <ng-content></ng-content>\n</span>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgChalkComponent.ctorParameters = function () { return [
        { type: NgChalkService }
    ]; };
    NgChalkComponent.propDecorators = {
        color: [{ type: Input, args: ['color',] }],
        border: [{ type: Input, args: ['borderVal',] }],
        borderRadius: [{ type: Input, args: ['borderRadius',] }],
        bg: [{ type: Input, args: ['bg',] }],
        templateName: [{ type: Input, args: ["template",] }],
        padding: [{ type: Input, args: ["padding",] }],
        container: [{ type: ViewChild, args: ["container", null,] }]
    };
    return NgChalkComponent;
}());
export { NgChalkComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhbGsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hhbGsvIiwic291cmNlcyI6WyJsaWIvbmctY2hhbGsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRDtJQWlCRSwwQkFBb0IsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFDakQsQ0FBQzs7Ozs7SUFFTyxxQ0FBVTs7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZHLENBQUM7O2dCQXBDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHNFQUF3Qzs7aUJBRXpDOzs7O2dCQU5RLGNBQWM7Ozt3QkFTcEIsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFdBQVc7K0JBQ2pCLEtBQUssU0FBQyxjQUFjO3FCQUNwQixLQUFLLFNBQUMsSUFBSTsrQkFDVixLQUFLLFNBQUMsVUFBVTswQkFDaEIsS0FBSyxTQUFDLFNBQVM7NEJBQ2YsU0FBUyxTQUFDLFdBQVcsRUFBRSxJQUFJOztJQXlCOUIsdUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQWpDWSxnQkFBZ0I7OztJQUUzQixpQ0FBc0I7O0lBQ3RCLGtDQUEyQjs7SUFDM0Isd0NBQW9DOztJQUNwQyw4QkFBZ0I7O0lBQ2hCLHdDQUF1Qzs7SUFDdkMsbUNBQWlDOztJQUNqQyxxQ0FBb0Q7Ozs7O0lBRXBELG9DQUFpQzs7Ozs7SUFFckIsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2hhbGtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUvbmctY2hhbGstdGVtcGxhdGUnO1xuaW1wb3J0IHsgTmdDaGFsa1NlcnZpY2UgfSBmcm9tICcuL25nLWNoYWxrLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1jaGFsaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy1jaGFsay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nLWNoYWxrLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdDaGFsa0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yO1xuICBASW5wdXQoJ2JvcmRlclZhbCcpIGJvcmRlcjtcbiAgQElucHV0KCdib3JkZXJSYWRpdXMnKSBib3JkZXJSYWRpdXM7XG4gIEBJbnB1dCgnYmcnKSBiZztcbiAgQElucHV0KFwidGVtcGxhdGVcIikgdGVtcGxhdGVOYW1lOlN0cmluZztcbiAgQElucHV0KFwicGFkZGluZ1wiKSBwYWRkaW5nOlN0cmluZztcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiLCBudWxsKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSB0ZW1wbGF0ZTpOZ0NoYWxrVGVtcGxhdGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0NoYWxrU2VydmljZTpOZ0NoYWxrU2VydmljZSkge1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplICgpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5uZ0NoYWxrU2VydmljZS5nZXRUZW1wbGF0ZUJ5TmFtZSh0aGlzLnRlbXBsYXRlTmFtZSk7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMuY29sb3IgfHwgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy50ZW1wbGF0ZS5jb2xvcj8gdGhpcy50ZW1wbGF0ZS5jb2xvciA6IFwiXCIpO1xuICAgIHRoaXMuYmcgPSB0aGlzLmJnIHx8ICh0aGlzLnRlbXBsYXRlICYmIHRoaXMudGVtcGxhdGUuYmcgPyB0aGlzLnRlbXBsYXRlLmJnIDogXCJcIik7XG4gICAgdGhpcy5ib3JkZXIgPSB0aGlzLmJvcmRlciB8fCAodGhpcy50ZW1wbGF0ZSAmJiB0aGlzLnRlbXBsYXRlLmJvcmRlclZhbCA/IHRoaXMudGVtcGxhdGUuYm9yZGVyVmFsIDogXCJcIik7XG4gICAgdGhpcy5ib3JkZXJSYWRpdXMgPSB0aGlzLmJvcmRlclJhZGl1cyB8fCAodGhpcy50ZW1wbGF0ZSAmJiB0aGlzLnRlbXBsYXRlLmJvcmRlclJhZGl1cyA/IHRoaXMudGVtcGxhdGUuYm9yZGVyUmFkaXVzIDogXCJcIik7XG4gICAgdGhpcy5wYWRkaW5nID0gdGhpcy5wYWRkaW5nIHx8ICh0aGlzLnRlbXBsYXRlICYmIHRoaXMudGVtcGxhdGUucGFkZGluZyA/IHRoaXMudGVtcGxhdGUucGFkZGluZyA6IFwiXCIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXIgPSB0aGlzLmJvcmRlcjtcbiAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMuYm9yZGVyUmFkaXVzO1xuICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuYmc7XG4gICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gdGhpcy5wYWRkaW5nIHx8IHRoaXMubmdDaGFsa1NlcnZpY2UuZ2V0RGVmYXVsdFBhZGRpbmcoKTtcbiAgfVxuXG59XG4iXX0=