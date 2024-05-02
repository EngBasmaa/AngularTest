import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { environment } from '../src/environment';
import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppComponent)
  .catch((err) => console.error(err));
