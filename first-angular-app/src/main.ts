import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/module/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/standalone/app.component';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


bootstrapApplication(AppComponent);
// bootstrapApplication(StandaloneHeaderComponent);
// bootstrapApplication(StandaloneUserComponent);

// bootstrapApplication(AppModule);