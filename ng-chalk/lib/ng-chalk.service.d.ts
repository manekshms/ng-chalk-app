import { NgChalkServiceConfig } from './ng-chalk-service-config';
import { NgChalkTemplate } from './template/ng-chalk-template';
export declare class NgChalkService {
    private config;
    constructor(config: NgChalkServiceConfig);
    getConfig(): NgChalkServiceConfig;
    setConfig(config: NgChalkServiceConfig): void;
    getTemplateByName(name: any): NgChalkTemplate;
    getDefaultPadding(): String;
}
