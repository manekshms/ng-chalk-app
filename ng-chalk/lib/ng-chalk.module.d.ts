import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { NgChalkServiceConfig } from './ng-chalk-service-config';
import { NgChalkConfig } from './ng-chalk-config';
export declare class NgChalkModule {
    static forRoot(config: NgChalkConfig): ModuleWithProviders;
}
export declare const NG_CHALK_SERVICE_CONFIG: InjectionToken<NgChalkConfig>;
export declare function createNgChalkServiceConfig(config?: NgChalkConfig): NgChalkServiceConfig;
