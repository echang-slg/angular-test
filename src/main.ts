import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// bootstrap root component instead of module
//bootstrapApplication(AppComponent, appConfig).catch ((err) => console.error(err));
