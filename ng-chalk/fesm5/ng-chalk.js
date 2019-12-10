import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Input, ViewChild, NgModule, InjectionToken } from '@angular/core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DangerTemplate = /** @class */ (function () {
    function DangerTemplate() {
        this.color = "#cf0a11";
        this.bg = "#fdd9d9";
    }
    return DangerTemplate;
}());
if (false) {
    /** @type {?} */
    DangerTemplate.prototype.color;
    /** @type {?} */
    DangerTemplate.prototype.bg;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WarningTemplate = /** @class */ (function () {
    function WarningTemplate() {
        this.color = "#7f7a05";
        this.bg = "#fffdd9";
    }
    return WarningTemplate;
}());
if (false) {
    /** @type {?} */
    WarningTemplate.prototype.color;
    /** @type {?} */
    WarningTemplate.prototype.bg;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfoTemplate = /** @class */ (function () {
    function InfoTemplate() {
        this.color = "#094182";
        this.bg = "#d9f5ff";
    }
    return InfoTemplate;
}());
if (false) {
    /** @type {?} */
    InfoTemplate.prototype.color;
    /** @type {?} */
    InfoTemplate.prototype.bg;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SuccessTemplate = /** @class */ (function () {
    function SuccessTemplate() {
        this.color = "#369628";
        this.bg = "#e0ffd8";
    }
    return SuccessTemplate;
}());
if (false) {
    /** @type {?} */
    SuccessTemplate.prototype.color;
    /** @type {?} */
    SuccessTemplate.prototype.bg;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgChalkServiceConfig = /** @class */ (function () {
    function NgChalkServiceConfig() {
        this.defaultPadding = '2px';
        this.templates = [
            { name: 'danger', template: new DangerTemplate },
            { name: 'warning', template: new WarningTemplate },
            { name: 'info', template: new InfoTemplate },
            { name: 'success', template: new SuccessTemplate },
        ];
    }
    NgChalkServiceConfig.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */ NgChalkServiceConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgChalkServiceConfig_Factory() { return new NgChalkServiceConfig(); }, token: NgChalkServiceConfig, providedIn: "root" });
    return NgChalkServiceConfig;
}());
if (false) {
    /** @type {?} */
    NgChalkServiceConfig.prototype.defaultPadding;
    /** @type {?} */
    NgChalkServiceConfig.prototype.templates;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgChalkService = /** @class */ (function () {
    function NgChalkService(config) {
        this.config = config;
    }
    /**
     * @return {?}
     */
    NgChalkService.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.config;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NgChalkService.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = config;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgChalkService.prototype.getTemplateByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var ngChalkTemplateConfig = this.config.templates.find((/**
         * @param {?} template
         * @return {?}
         */
        function (template) { return template.name == name; }));
        return ngChalkTemplateConfig ? ngChalkTemplateConfig.template : null;
    };
    /**
     * @return {?}
     */
    NgChalkService.prototype.getDefaultPadding = /**
     * @return {?}
     */
    function () {
        return this.config.defaultPadding;
    };
    NgChalkService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgChalkService.ctorParameters = function () { return [
        { type: NgChalkServiceConfig }
    ]; };
    /** @nocollapse */ NgChalkService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgChalkService_Factory() { return new NgChalkService(ɵɵinject(NgChalkServiceConfig)); }, token: NgChalkService, providedIn: "root" });
    return NgChalkService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgChalkService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgChalkModule = /** @class */ (function () {
    function NgChalkModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgChalkModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgChalkModule,
            providers: [
                {
                    provide: NG_CHALK_SERVICE_CONFIG,
                    useValue: config
                },
                {
                    provide: NgChalkServiceConfig,
                    useFactory: createNgChalkServiceConfig,
                    deps: [NG_CHALK_SERVICE_CONFIG]
                }
            ]
        };
    };
    NgChalkModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgChalkComponent],
                    imports: [CommonModule],
                    exports: [NgChalkComponent],
                    providers: [NgChalkServiceConfig]
                },] }
    ];
    return NgChalkModule;
}());
/** @type {?} */
var NG_CHALK_SERVICE_CONFIG = new InjectionToken('config');
/**
 * @param {?=} config
 * @return {?}
 */
function createNgChalkServiceConfig(config) {
    /** @type {?} */
    var ngChalkServiceConfig = new NgChalkServiceConfig();
    if (config) {
        ngChalkServiceConfig.defaultPadding = config.defaultPadding || ngChalkServiceConfig.defaultPadding;
        ngChalkServiceConfig.templates = __spread(ngChalkServiceConfig.templates, (config.templates || ngChalkServiceConfig.templates));
    }
    return ngChalkServiceConfig;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgChalkConfig() { }
if (false) {
    /** @type {?|undefined} */
    NgChalkConfig.prototype.defaultPadding;
    /** @type {?|undefined} */
    NgChalkConfig.prototype.templates;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgChalkTemplate() { }
if (false) {
    /** @type {?|undefined} */
    NgChalkTemplate.prototype.color;
    /** @type {?|undefined} */
    NgChalkTemplate.prototype.bg;
    /** @type {?|undefined} */
    NgChalkTemplate.prototype.padding;
    /** @type {?|undefined} */
    NgChalkTemplate.prototype.borderVal;
    /** @type {?|undefined} */
    NgChalkTemplate.prototype.borderRadius;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgChalkTemplateConfig() { }
if (false) {
    /** @type {?} */
    NgChalkTemplateConfig.prototype.name;
    /** @type {?} */
    NgChalkTemplateConfig.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NG_CHALK_SERVICE_CONFIG, NgChalkComponent, NgChalkModule, NgChalkService, createNgChalkServiceConfig, NgChalkServiceConfig as ɵa };
//# sourceMappingURL=ng-chalk.js.map
