/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DangerTemplate } from './template/danger-template';
import { WarningTemplate } from './template/warning-template';
import { InfoTemplate } from './template/info-template';
import { SuccessTemplate } from './template/success-template';
import * as i0 from "@angular/core";
export class NgChalkServiceConfig {
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
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */ NgChalkServiceConfig.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgChalkServiceConfig_Factory() { return new NgChalkServiceConfig(); }, token: NgChalkServiceConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgChalkServiceConfig.prototype.defaultPadding;
    /** @type {?} */
    NgChalkServiceConfig.prototype.templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhbGstc2VydmljZS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGFsay8iLCJzb3VyY2VzIjpbImxpYi9uZy1jaGFsay1zZXJ2aWNlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBSzlELE1BQU0sT0FBTyxvQkFBb0I7SUFIakM7UUFJSSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixjQUFTLEdBQTJCO1lBQ2hDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxjQUFjLEVBQUM7WUFDOUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLGVBQWUsRUFBQztZQUNoRCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksWUFBWSxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxlQUFlLEVBQUM7U0FDbkQsQ0FBQTtLQUNKOzs7WUFYQSxVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7O0lBRUcsOENBQXVCOztJQUN2Qix5Q0FLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2hhbGtUZW1wbGF0ZUNvbmZpZyB9IGZyb20gJy4vdGVtcGxhdGUvbmctY2hhbGstdGVtcGxhdGUtY29uZmlnJztcbmltcG9ydCB7IE5nQ2hhbGtDb25maWcgfSBmcm9tICcuL25nLWNoYWxrLWNvbmZpZyc7XG5pbXBvcnQgeyBEYW5nZXJUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUvZGFuZ2VyLXRlbXBsYXRlJztcbmltcG9ydCB7IFdhcm5pbmdUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUvd2FybmluZy10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBJbmZvVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlL2luZm8tdGVtcGxhdGUnO1xuaW1wb3J0IHsgU3VjY2Vzc1RlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS9zdWNjZXNzLXRlbXBsYXRlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2hhbGtTZXJ2aWNlQ29uZmlnIGltcGxlbWVudHMgTmdDaGFsa0NvbmZpZ3tcbiAgICBkZWZhdWx0UGFkZGluZyA9ICcycHgnO1xuICAgIHRlbXBsYXRlczpOZ0NoYWxrVGVtcGxhdGVDb25maWdbXSA9IFtcbiAgICAgICAge25hbWU6ICdkYW5nZXInLCB0ZW1wbGF0ZTogbmV3IERhbmdlclRlbXBsYXRlfSxcbiAgICAgICAge25hbWU6ICd3YXJuaW5nJywgdGVtcGxhdGU6IG5ldyBXYXJuaW5nVGVtcGxhdGV9LFxuICAgICAgICB7bmFtZTogJ2luZm8nLCB0ZW1wbGF0ZTogbmV3IEluZm9UZW1wbGF0ZX0sXG4gICAgICAgIHtuYW1lOiAnc3VjY2VzcycsIHRlbXBsYXRlOiBuZXcgU3VjY2Vzc1RlbXBsYXRlfSxcbiAgICBdXG59XG4iXX0=