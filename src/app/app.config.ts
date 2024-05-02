import { ApplicationConfig as AngularApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environment';

interface FeaturesConfig {
  newUserOnboarding: boolean;
  advancedSearch: boolean;
}

interface ApplicationConfig extends AngularApplicationConfig {
  apiUrl: string;
  features: FeaturesConfig;
  environment: typeof environment; // Use the type of the imported environment object
  appName: string;
  defaultLocale: string;
  production: boolean;
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
  // API base URL
  apiUrl: 'https://api.example.com',
  // Feature toggles
  features: {
    newUserOnboarding: true,
    advancedSearch: false,
  },
  // Environment-specific settings
  environment: {
    production: false,
  },
  // Any other application-wide settings
  appName: 'My Angular App',
  defaultLocale: 'en-US',
  production: false,
};
