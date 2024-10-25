import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './module.app-routing.module';
import { ModuleAppComponent } from './module.app.component';
import { ModuleHeaderComponent } from './header/module.header.component';
import { ModuleUserComponent } from './user/module.user.component';

@NgModule({
  declarations: [
    ModuleAppComponent,
    ModuleHeaderComponent,
    ModuleUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ModuleAppComponent]
})
export class AppModule { }
