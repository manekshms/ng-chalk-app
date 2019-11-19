/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
var NgChalkComponent = /** @class */ (function () {
    function NgChalkComponent() {
    }
    /**
     * @return {?}
     */
    NgChalkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.border);
        this.container.nativeElement.style.color = this.color;
        this.container.nativeElement.style.border = this.border;
        this.container.nativeElement.style.background = this.bg;
    };
    NgChalkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-chalk',
                    template: "<span #container >\n    <ng-content></ng-content>\n</span>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    NgChalkComponent.ctorParameters = function () { return []; };
    NgChalkComponent.propDecorators = {
        color: [{ type: Input, args: ['color',] }],
        border: [{ type: Input, args: ['borderVal',] }],
        bg: [{ type: Input, args: ['bg',] }],
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
    NgChalkComponent.prototype.bg;
    /** @type {?} */
    NgChalkComponent.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhbGsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hhbGsvIiwic291cmNlcyI6WyJsaWIvbmctY2hhbGsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGO0lBWUU7SUFDQSxDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDMUQsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsc0VBQXdDOztpQkFFekM7Ozs7O3dCQUdFLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxXQUFXO3FCQUNqQixLQUFLLFNBQUMsSUFBSTs0QkFDVixTQUFTLFNBQUMsV0FBVyxFQUFFLElBQUk7O0lBWTlCLHVCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksZ0JBQWdCOzs7SUFFM0IsaUNBQXNCOztJQUN0QixrQ0FBMkI7O0lBQzNCLDhCQUFnQjs7SUFDaEIscUNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY2hhbGsnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctY2hhbGsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy1jaGFsay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2hhbGtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjtcbiAgQElucHV0KCdib3JkZXJWYWwnKSBib3JkZXI7XG4gIEBJbnB1dCgnYmcnKSBiZztcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiLCBudWxsKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvcmRlcik7XG4gICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXIgPSB0aGlzLmJvcmRlcjtcbiAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLmJnO1xuICB9XG5cbn1cbiJdfQ==