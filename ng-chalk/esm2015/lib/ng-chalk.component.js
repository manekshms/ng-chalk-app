/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
export class NgChalkComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.border);
        this.container.nativeElement.style.color = this.color;
        this.container.nativeElement.style.border = this.border;
        this.container.nativeElement.style.background = this.bg;
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
NgChalkComponent.ctorParameters = () => [];
NgChalkComponent.propDecorators = {
    color: [{ type: Input, args: ['color',] }],
    border: [{ type: Input, args: ['borderVal',] }],
    bg: [{ type: Input, args: ['bg',] }],
    container: [{ type: ViewChild, args: ["container", null,] }]
};
if (false) {
    /** @type {?} */
    NgChalkComponent.prototype.color;
    /** @type {?} */
    NgChalkComponent.prototype.border;
    /** @type {?} */
    NgChalkComponent.prototype.bg;
    /** @type {?} */
    NgChalkComponent.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhbGsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hhbGsvIiwic291cmNlcyI6WyJsaWIvbmctY2hhbGsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2hGLE1BQU0sT0FBTyxnQkFBZ0I7SUFPM0I7SUFDQSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzFELENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHNFQUF3Qzs7YUFFekM7Ozs7O29CQUdFLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxXQUFXO2lCQUNqQixLQUFLLFNBQUMsSUFBSTt3QkFDVixTQUFTLFNBQUMsV0FBVyxFQUFFLElBQUk7Ozs7SUFINUIsaUNBQXNCOztJQUN0QixrQ0FBMkI7O0lBQzNCLDhCQUFnQjs7SUFDaEIscUNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY2hhbGsnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctY2hhbGsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy1jaGFsay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2hhbGtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjtcbiAgQElucHV0KCdib3JkZXJWYWwnKSBib3JkZXI7XG4gIEBJbnB1dCgnYmcnKSBiZztcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiLCBudWxsKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvcmRlcik7XG4gICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXIgPSB0aGlzLmJvcmRlcjtcbiAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLmJnO1xuICB9XG5cbn1cbiJdfQ==