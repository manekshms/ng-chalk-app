import { Injectable, Optional } from '@angular/core';
import { NgChalkServiceConfig } from './ng-chalk-service-config';
import { NgChalkTemplateConfig } from './template/ng-chalk-template-config';
import { NgChalkTemplate } from './template/ng-chalk-template';

@Injectable({
  providedIn: 'root'
})
export class NgChalkService {

    constructor(private config:NgChalkServiceConfig) {
    }

    public getConfig():NgChalkServiceConfig {
        return this.config;
    }

    public setConfig(config:NgChalkServiceConfig) {
        this.config = config;
    }

    public getTemplateByName(name):NgChalkTemplate {
        const ngChalkTemplateConfig:NgChalkTemplateConfig = this.config.templates.find( template => template.name == name );
        return ngChalkTemplateConfig? ngChalkTemplateConfig.template : null;
    }

    public getDefaultPadding():String {
        return this.config.defaultPadding;
    }

}