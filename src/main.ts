 // It's important that setupenv is the first import to apply overrides before anything else
import './setupenv';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import localeKo from '@angular/common/locales/ko';
import { rxSchedulersGlobalPatch } from '@infragistics/appbuilder-sdk';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

// Needed because of the RxJS problems with the latest version
rxSchedulersGlobalPatch();

// Register the locale data for languages that AppBuilder supports
registerLocaleData(localeJa, 'ja');
registerLocaleData(localeKo, 'ko');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));