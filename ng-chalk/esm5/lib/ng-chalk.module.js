/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChalkComponent } from './ng-chalk.component';
import { NgChalkServiceConfig } from './ng-chalk-service-config';
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
export { NgChalkModule };
/** @type {?} */
export var NG_CHALK_SERVICE_CONFIG = new InjectionToken('config');
/**
 * @param {?=} config
 * @return {?}
 */
export function createNgChalkServiceConfig(config) {
    /** @type {?} */
    var ngChalkServiceConfig = new NgChalkServiceConfig();
    if (config) {
        ngChalkServiceConfig.defaultPadding = config.defaultPadding || ngChalkServiceConfig.defaultPadding;
        ngChalkServiceConfig.templates = tslib_1.__spread(ngChalkServiceConfig.templates, (config.templates || ngChalkServiceConfig.templates));
    }
    return ngChalkServiceConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhbGsubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hhbGsvIiwic291cmNlcyI6WyJsaWIvbmctY2hhbGsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdqRTtJQUFBO0lBeUJDLENBQUM7Ozs7O0lBakJPLHFCQUFPOzs7O0lBQWQsVUFBZSxNQUFvQjtRQUNqQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSx1QkFBdUI7b0JBQ2hDLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixVQUFVLEVBQUUsMEJBQTBCO29CQUN0QyxJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDaEM7YUFDRjtTQUNGLENBQUE7SUFDSCxDQUFDOztnQkF2QkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUMzQixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDbEM7O0lBb0JBLG9CQUFDO0NBQUEsQUF6QkYsSUF5QkU7U0FuQlcsYUFBYTs7QUFxQjFCLE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsUUFBUSxDQUFDOzs7OztBQUVsRixNQUFNLFVBQVUsMEJBQTBCLENBQUMsTUFBcUI7O1FBQzFELG9CQUFvQixHQUFHLElBQUksb0JBQW9CLEVBQUU7SUFFckQsSUFBRyxNQUFNLEVBQUM7UUFDUixvQkFBb0IsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxvQkFBb0IsQ0FBQyxjQUFjLENBQUM7UUFDbkcsb0JBQW9CLENBQUMsU0FBUyxvQkFBTyxvQkFBb0IsQ0FBQyxTQUFTLEVBQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FDaEk7SUFDRCxPQUFPLG9CQUFvQixDQUFDO0FBQzlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ0NoYWxrQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1jaGFsay5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdDaGFsa1NlcnZpY2VDb25maWcgfSBmcm9tICcuL25nLWNoYWxrLXNlcnZpY2UtY29uZmlnJztcbmltcG9ydCB7IE5nQ2hhbGtDb25maWcgfSBmcm9tICcuL25nLWNoYWxrLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05nQ2hhbGtDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW05nQ2hhbGtDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtOZ0NoYWxrU2VydmljZUNvbmZpZ11cbn0pXG5leHBvcnQgY2xhc3MgTmdDaGFsa01vZHVsZSB7IFxuXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzpOZ0NoYWxrQ29uZmlnKTpNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQ2hhbGtNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE5HX0NIQUxLX1NFUlZJQ0VfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE5nQ2hhbGtTZXJ2aWNlQ29uZmlnLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZU5nQ2hhbGtTZXJ2aWNlQ29uZmlnLFxuICAgICAgICAgIGRlcHM6IFtOR19DSEFMS19TRVJWSUNFX0NPTkZJR11cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG4gfVxuXG5leHBvcnQgY29uc3QgTkdfQ0hBTEtfU0VSVklDRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TmdDaGFsa0NvbmZpZz4oJ2NvbmZpZycpXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZ0NoYWxrU2VydmljZUNvbmZpZyhjb25maWc/Ok5nQ2hhbGtDb25maWcpOiBOZ0NoYWxrU2VydmljZUNvbmZpZyB7XG4gIHZhciBuZ0NoYWxrU2VydmljZUNvbmZpZyA9IG5ldyBOZ0NoYWxrU2VydmljZUNvbmZpZygpO1xuXG4gIGlmKGNvbmZpZyl7XG4gICAgbmdDaGFsa1NlcnZpY2VDb25maWcuZGVmYXVsdFBhZGRpbmcgPSBjb25maWcuZGVmYXVsdFBhZGRpbmcgfHwgbmdDaGFsa1NlcnZpY2VDb25maWcuZGVmYXVsdFBhZGRpbmc7XG4gICAgbmdDaGFsa1NlcnZpY2VDb25maWcudGVtcGxhdGVzID0gWy4uLm5nQ2hhbGtTZXJ2aWNlQ29uZmlnLnRlbXBsYXRlcywgIC4uLihjb25maWcudGVtcGxhdGVzIHx8IG5nQ2hhbGtTZXJ2aWNlQ29uZmlnLnRlbXBsYXRlcyldO1xuICB9XG4gIHJldHVybiBuZ0NoYWxrU2VydmljZUNvbmZpZztcbn0iXX0=