import { Injectable, ɵɵdefineInjectable, Component, Input, ViewChild, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgChalkService {
    constructor() { }
}
NgChalkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgChalkService.ctorParameters = () => [];
/** @nocollapse */ NgChalkService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgChalkService_Factory() { return new NgChalkService(); }, token: NgChalkService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgChalkComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgChalkModule {
}
NgChalkModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgChalkComponent],
                imports: [],
                exports: [NgChalkComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgChalkComponent, NgChalkModule, NgChalkService };
//# sourceMappingURL=ng-chalk.js.map
