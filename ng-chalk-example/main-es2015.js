(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/ng-chalk/fesm2015/ng-chalk.js":
/*!********************************************************************************************!*\
  !*** /home/maneksh/public_node/work-space/ng-chalk-app/dist/ng-chalk/fesm2015/ng-chalk.js ***!
  \********************************************************************************************/
/*! exports provided: NG_CHALK_SERVICE_CONFIG, NgChalkComponent, NgChalkModule, NgChalkService, createNgChalkServiceConfig, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_CHALK_SERVICE_CONFIG", function() { return NG_CHALK_SERVICE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgChalkComponent", function() { return NgChalkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgChalkModule", function() { return NgChalkModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgChalkService", function() { return NgChalkService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNgChalkServiceConfig", function() { return createNgChalkServiceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgChalkServiceConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DangerTemplate {
    constructor() {
        this.color = "#cf0a11";
        this.bg = "#fdd9d9";
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WarningTemplate {
    constructor() {
        this.color = "#7f7a05";
        this.bg = "#fffdd9";
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InfoTemplate {
    constructor() {
        this.color = "#094182";
        this.bg = "#d9f5ff";
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SuccessTemplate {
    constructor() {
        this.color = "#369628";
        this.bg = "#e0ffd8";
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgChalkServiceConfig {
    constructor() {
        this.defaultPadding = '2px';
        this.templates = [
            { name: 'danger', template: new DangerTemplate },
            { name: 'warning', template: new WarningTemplate },
            { name: 'info', template: new InfoTemplate },
            { name: 'success', template: new SuccessTemplate },
        ];
    }
}
NgChalkServiceConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */ NgChalkServiceConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgChalkServiceConfig_Factory() { return new NgChalkServiceConfig(); }, token: NgChalkServiceConfig, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgChalkService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this.config = config;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getTemplateByName(name) {
        /** @type {?} */
        const ngChalkTemplateConfig = this.config.templates.find((/**
         * @param {?} template
         * @return {?}
         */
        template => template.name == name));
        return ngChalkTemplateConfig ? ngChalkTemplateConfig.template : null;
    }
    /**
     * @return {?}
     */
    getDefaultPadding() {
        return this.config.defaultPadding;
    }
}
NgChalkService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgChalkService.ctorParameters = () => [
    { type: NgChalkServiceConfig }
];
/** @nocollapse */ NgChalkService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgChalkService_Factory() { return new NgChalkService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgChalkServiceConfig)); }, token: NgChalkService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgChalkComponent {
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
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
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['color',] }],
    border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['borderVal',] }],
    borderRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['borderRadius',] }],
    bg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['bg',] }],
    templateName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ["template",] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ["padding",] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["container", null,] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgChalkModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
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
    }
}
NgChalkModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [NgChalkComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [NgChalkComponent],
                providers: [NgChalkServiceConfig]
            },] }
];
/** @type {?} */
const NG_CHALK_SERVICE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('config');
/**
 * @param {?=} config
 * @return {?}
 */
function createNgChalkServiceConfig(config) {
    /** @type {?} */
    var ngChalkServiceConfig = new NgChalkServiceConfig();
    if (config) {
        ngChalkServiceConfig.defaultPadding = config.defaultPadding || ngChalkServiceConfig.defaultPadding;
        ngChalkServiceConfig.templates = [...ngChalkServiceConfig.templates, ...(config.templates || ngChalkServiceConfig.templates)];
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
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgChalkTemplate() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgChalkTemplateConfig() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng-chalk.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************************************************************!*\
  !*** /home/maneksh/public_node/work-space/ng-chalk-app/node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n    <h2 class=\"page-title\">Examples</h2>\n    <section class=\"example-container\">\n        <h3>Only text color</h3>\n        <ng-chalk color=\"orangered\" >Hai there</ng-chalk>\n    </section>\n    <section class=\"example-container\">\n        <h3>Text color and background</h3>\n        <ng-chalk color=\"Crimson \"  bg=\"Cornsilk \">Hai there</ng-chalk>\n    </section>\n    <section class=\"example-container\">\n        <h3>Text color, background and border</h3>\n        <ng-chalk color=\"white\"  borderVal=\"2px solid DarkBlue \" bg=\"CornflowerBlue\">Hai there</ng-chalk>\n    </section>\n    <h2>Examples with template</h2>\n    <section class=\"example-container\">\n        <h3>Danger template</h3>\n        <ng-chalk template=\"danger\" >Hai there</ng-chalk>\n    </section>\n    <section class=\"example-container\">\n        <h3>Info template</h3>\n        <ng-chalk template=\"info\" >Hai there</ng-chalk>\n    </section>\n    <section class=\"example-container\">\n        <h3>Warning template</h3>\n        <ng-chalk template=\"warning\" >Hai there</ng-chalk>\n    </section>\n    <section class=\"example-container\">\n        <h3>Success template</h3>\n        <ng-chalk template=\"success\" >Hai there</ng-chalk>\n    </section>\n    <h2>Custom Template with name foo</h2>\n    <section class=\"example-container\">\n        <h3>Foo template</h3>\n        <ng-chalk template=\"foo\" >Hai there</ng-chalk>\n    </section>\n</div>"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title {\n  text-align: center;\n}\n\n.page-container {\n  max-width: 850px;\n  margin: 20px auto;\n}\n\n.example-container {\n  padding: 20px;\n  border: 1px solid #ddd;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbmVrc2gvcHVibGljX25vZGUvd29yay1zcGFjZS9uZy1jaGFsay1hcHAvcHJvamVjdHMvbmctY2hhbGstZXhhbXBsZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25nLWNoYWxrLWV4YW1wbGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNFSiIsImZpbGUiOiJwcm9qZWN0cy9uZy1jaGFsay1leGFtcGxlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDg1MHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iLCIucGFnZS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4NTBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng-chalk-example';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_chalk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chalk */ "../../dist/ng-chalk/fesm2015/ng-chalk.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_chalk_templates_foo_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-chalk-templates/foo-template */ "./src/app/ng-chalk-templates/foo-template.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ng_chalk__WEBPACK_IMPORTED_MODULE_3__["NgChalkModule"].forRoot({ templates: [{ name: 'foo', template: new _ng_chalk_templates_foo_template__WEBPACK_IMPORTED_MODULE_5__["FooTemplate"]() }], defaultPadding: '2px' })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/ng-chalk-templates/foo-template.ts":
/*!****************************************************!*\
  !*** ./src/app/ng-chalk-templates/foo-template.ts ***!
  \****************************************************/
/*! exports provided: FooTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooTemplate", function() { return FooTemplate; });
class FooTemplate {
    constructor() {
        this.color = "#fff";
        this.bg = "#1366ff";
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/maneksh/public_node/work-space/ng-chalk-app/projects/ng-chalk-example/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map