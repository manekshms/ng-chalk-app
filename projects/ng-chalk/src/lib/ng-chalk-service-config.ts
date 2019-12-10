import { Injectable } from '@angular/core';
import { NgChalkTemplateConfig } from './template/ng-chalk-template-config';
import { NgChalkConfig } from './ng-chalk-config';
import { DangerTemplate } from './template/danger-template';
import { WarningTemplate } from './template/warning-template';
import { InfoTemplate } from './template/info-template';
import { SuccessTemplate } from './template/success-template';

@Injectable({
    providedIn: "root"
})
export class NgChalkServiceConfig implements NgChalkConfig{
    defaultPadding = '2px';
    templates:NgChalkTemplateConfig[] = [
        {name: 'danger', template: new DangerTemplate},
        {name: 'warning', template: new WarningTemplate},
        {name: 'info', template: new InfoTemplate},
        {name: 'success', template: new SuccessTemplate},
    ]
}
