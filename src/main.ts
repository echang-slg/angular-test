import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch((err) => console.error(err));

// bootstrap root component instead of module
bootstrapApplication(AppComponent, appConfig).catch ((err) => console.error(err));
