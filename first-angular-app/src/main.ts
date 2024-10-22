import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/module/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { StandaloneAppComponent } from './app/standalone/standalon.app.component';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


bootstrapApplication(StandaloneAppComponent);
// bootstrapApplication(StandaloneHeaderComponent);
// bootstrapApplication(StandaloneUserComponent);

// bootstrapApplication(AppModule);