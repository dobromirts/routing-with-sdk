import { ErrorHandler, Provider, importProvidersFrom } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { from } from 'rxjs';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppBuilderComponent, NavigationService, appConfig as config } from '@infragistics/appbuilder-sdk';
import { routes } from './app.routes';
import { GlobalErrorHandlerService } from './error-routing/error/global-error-handler.service';
import { environment } from '../environments/environment';
import { MyNavigationService } from './services/my-navigation.service';

class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return from(import(`../../node_modules/@infragistics/appbuilder-sdk/src/assets/i18n/${lang}.json`));
  }
}

// Provide the HAMMER_GESTURE_CONFIG token
// to override the default settings of the HammerModule
// { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }

const providers: Provider = [
  provideRouter(routes, withDebugTracing()),
  importProvidersFrom(BrowserModule, HammerModule),
  provideAnimations(),
  { provide: NavigationService, useClass: MyNavigationService },
];

if (environment.production) {
  providers.push({
    provide: ErrorHandler,
    useClass: GlobalErrorHandlerService,
  });
}

// export const appConfig: ApplicationConfig = { providers };

export const appConfig = {
  ...config,
  providers: [
    providers,
    ...config.providers,
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: WebpackTranslateLoader,
        },
        defaultLanguage: 'en',
      })
    ),
  ],
};
