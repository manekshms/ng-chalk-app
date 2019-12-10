/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChalkComponent } from './ng-chalk.component';
import { NgChalkServiceConfig } from './ng-chalk-service-config';
export class NgChalkModule {
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
    { type: NgModule, args: [{
                declarations: [NgChalkComponent],
                imports: [CommonModule],
                exports: [NgChalkComponent],
                providers: [NgChalkServiceConfig]
            },] }
];
/** @type {?} */
export const NG_CHALK_SERVICE_CONFIG = new InjectionToken('config');
/**
 * @param {?=} config
 * @return {?}
 */
export function createNgChalkServiceConfig(config) {
    /** @type {?} */
    var ngChalkServiceConfig = new NgChalkServiceConfig();
    if (config) {
        ngChalkServiceConfig.defaultPadding = config.defaultPadding || ngChalkServiceConfig.defaultPadding;
        ngChalkServiceConfig.templates = [...ngChalkServiceConfig.templates, ...(config.templates || ngChalkServiceConfig.templates)];
    }
    return ngChalkServiceConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhbGsubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hhbGsvIiwic291cmNlcyI6WyJsaWIvbmctY2hhbGsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBU2pFLE1BQU0sT0FBTyxhQUFhOzs7OztJQUV4QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQW9CO1FBQ2pDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxvQkFBb0I7b0JBQzdCLFVBQVUsRUFBRSwwQkFBMEI7b0JBQ3RDLElBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNoQzthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7OztZQXZCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2FBQ2xDOzs7QUFzQkQsTUFBTSxPQUFPLHVCQUF1QixHQUFHLElBQUksY0FBYyxDQUFnQixRQUFRLENBQUM7Ozs7O0FBRWxGLE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxNQUFxQjs7UUFDMUQsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTtJQUVyRCxJQUFHLE1BQU0sRUFBQztRQUNSLG9CQUFvQixDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLG9CQUFvQixDQUFDLGNBQWMsQ0FBQztRQUNuRyxvQkFBb0IsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLFNBQVMsRUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ2hJO0lBQ0QsT0FBTyxvQkFBb0IsQ0FBQztBQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdDaGFsa0NvbXBvbmVudCB9IGZyb20gJy4vbmctY2hhbGsuY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ2hhbGtTZXJ2aWNlQ29uZmlnIH0gZnJvbSAnLi9uZy1jaGFsay1zZXJ2aWNlLWNvbmZpZyc7XG5pbXBvcnQgeyBOZ0NoYWxrQ29uZmlnIH0gZnJvbSAnLi9uZy1jaGFsay1jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ0NoYWxrQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOZ0NoYWxrQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbTmdDaGFsa1NlcnZpY2VDb25maWddXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2hhbGtNb2R1bGUgeyBcblxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6TmdDaGFsa0NvbmZpZyk6TW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NoYWxrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBOR19DSEFMS19TRVJWSUNFX0NPTkZJRyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBOZ0NoYWxrU2VydmljZUNvbmZpZyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVOZ0NoYWxrU2VydmljZUNvbmZpZyxcbiAgICAgICAgICBkZXBzOiBbTkdfQ0hBTEtfU0VSVklDRV9DT05GSUddXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuIH1cblxuZXhwb3J0IGNvbnN0IE5HX0NIQUxLX1NFUlZJQ0VfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPE5nQ2hhbGtDb25maWc+KCdjb25maWcnKVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmdDaGFsa1NlcnZpY2VDb25maWcoY29uZmlnPzpOZ0NoYWxrQ29uZmlnKTogTmdDaGFsa1NlcnZpY2VDb25maWcge1xuICB2YXIgbmdDaGFsa1NlcnZpY2VDb25maWcgPSBuZXcgTmdDaGFsa1NlcnZpY2VDb25maWcoKTtcblxuICBpZihjb25maWcpe1xuICAgIG5nQ2hhbGtTZXJ2aWNlQ29uZmlnLmRlZmF1bHRQYWRkaW5nID0gY29uZmlnLmRlZmF1bHRQYWRkaW5nIHx8IG5nQ2hhbGtTZXJ2aWNlQ29uZmlnLmRlZmF1bHRQYWRkaW5nO1xuICAgIG5nQ2hhbGtTZXJ2aWNlQ29uZmlnLnRlbXBsYXRlcyA9IFsuLi5uZ0NoYWxrU2VydmljZUNvbmZpZy50ZW1wbGF0ZXMsICAuLi4oY29uZmlnLnRlbXBsYXRlcyB8fCBuZ0NoYWxrU2VydmljZUNvbmZpZy50ZW1wbGF0ZXMpXTtcbiAgfVxuICByZXR1cm4gbmdDaGFsa1NlcnZpY2VDb25maWc7XG59Il19