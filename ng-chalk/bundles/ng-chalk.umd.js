(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-chalk', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ng-chalk'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgChalkService = /** @class */ (function () {
        function NgChalkService() {
        }
        NgChalkService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgChalkService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgChalkService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgChalkService_Factory() { return new NgChalkService(); }, token: NgChalkService, providedIn: "root" });
        return NgChalkService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'ng-chalk',
                        template: "<span #container >\n    <ng-content></ng-content>\n</span>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgChalkComponent.ctorParameters = function () { return []; };
        NgChalkComponent.propDecorators = {
            color: [{ type: core.Input, args: ['color',] }],
            border: [{ type: core.Input, args: ['borderVal',] }],
            bg: [{ type: core.Input, args: ['bg',] }],
            container: [{ type: core.ViewChild, args: ["container", null,] }]
        };
        return NgChalkComponent;
    }());
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
    var NgChalkModule = /** @class */ (function () {
        function NgChalkModule() {
        }
        NgChalkModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgChalkComponent],
                        imports: [],
                        exports: [NgChalkComponent]
                    },] }
        ];
        return NgChalkModule;
    }());

    exports.NgChalkComponent = NgChalkComponent;
    exports.NgChalkModule = NgChalkModule;
    exports.NgChalkService = NgChalkService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-chalk.umd.js.map
