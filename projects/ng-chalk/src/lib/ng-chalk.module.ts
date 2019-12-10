import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChalkComponent } from './ng-chalk.component';
import { NgChalkServiceConfig } from './ng-chalk-service-config';
import { NgChalkConfig } from './ng-chalk-config';

@NgModule({
  declarations: [NgChalkComponent],
  imports: [CommonModule],
  exports: [NgChalkComponent],
  providers: [NgChalkServiceConfig]
})
export class NgChalkModule { 

  static forRoot(config:NgChalkConfig):ModuleWithProviders {
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
    }
  }

 }

export const NG_CHALK_SERVICE_CONFIG = new InjectionToken<NgChalkConfig>('config')

export function createNgChalkServiceConfig(config?:NgChalkConfig): NgChalkServiceConfig {
  var ngChalkServiceConfig = new NgChalkServiceConfig();

  if(config){
    ngChalkServiceConfig.defaultPadding = config.defaultPadding || ngChalkServiceConfig.defaultPadding;
    ngChalkServiceConfig.templates = [...ngChalkServiceConfig.templates,  ...(config.templates || ngChalkServiceConfig.templates)];
  }
  return ngChalkServiceConfig;
}