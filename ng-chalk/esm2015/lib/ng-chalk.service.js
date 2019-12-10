/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgChalkServiceConfig } from './ng-chalk-service-config';
import * as i0 from "@angular/core";
import * as i1 from "./ng-chalk-service-config";
export class NgChalkService {
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgChalkService.ctorParameters = () => [
    { type: NgChalkServiceConfig }
];
/** @nocollapse */ NgChalkService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgChalkService_Factory() { return new NgChalkService(i0.ɵɵinject(i1.NgChalkServiceConfig)); }, token: NgChalkService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgChalkService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhbGsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNoYWxrLyIsInNvdXJjZXMiOlsibGliL25nLWNoYWxrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQU9qRSxNQUFNLE9BQU8sY0FBYzs7OztJQUV2QixZQUFvQixNQUEyQjtRQUEzQixXQUFNLEdBQU4sTUFBTSxDQUFxQjtJQUMvQyxDQUFDOzs7O0lBRU0sU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxNQUEyQjtRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLElBQUk7O2NBQ25CLHFCQUFxQixHQUF5QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O1FBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtRQUNuSCxPQUFPLHFCQUFxQixDQUFBLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RSxDQUFDOzs7O0lBRU0saUJBQWlCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdEMsQ0FBQzs7O1lBdkJKLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLG9CQUFvQjs7Ozs7Ozs7SUFTYixnQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDaGFsa1NlcnZpY2VDb25maWcgfSBmcm9tICcuL25nLWNoYWxrLXNlcnZpY2UtY29uZmlnJztcbmltcG9ydCB7IE5nQ2hhbGtUZW1wbGF0ZUNvbmZpZyB9IGZyb20gJy4vdGVtcGxhdGUvbmctY2hhbGstdGVtcGxhdGUtY29uZmlnJztcbmltcG9ydCB7IE5nQ2hhbGtUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUvbmctY2hhbGstdGVtcGxhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ0NoYWxrU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzpOZ0NoYWxrU2VydmljZUNvbmZpZykge1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb25maWcoKTpOZ0NoYWxrU2VydmljZUNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzpOZ0NoYWxrU2VydmljZUNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGVtcGxhdGVCeU5hbWUobmFtZSk6TmdDaGFsa1RlbXBsYXRlIHtcbiAgICAgICAgY29uc3QgbmdDaGFsa1RlbXBsYXRlQ29uZmlnOk5nQ2hhbGtUZW1wbGF0ZUNvbmZpZyA9IHRoaXMuY29uZmlnLnRlbXBsYXRlcy5maW5kKCB0ZW1wbGF0ZSA9PiB0ZW1wbGF0ZS5uYW1lID09IG5hbWUgKTtcbiAgICAgICAgcmV0dXJuIG5nQ2hhbGtUZW1wbGF0ZUNvbmZpZz8gbmdDaGFsa1RlbXBsYXRlQ29uZmlnLnRlbXBsYXRlIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGVmYXVsdFBhZGRpbmcoKTpTdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZGVmYXVsdFBhZGRpbmc7XG4gICAgfVxuXG59Il19