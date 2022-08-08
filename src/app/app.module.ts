import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImmigrationListComponent } from './pages/immigration-list/immigration-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ImmigrationCardComponent } from './immigration-card/immigration-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImmigrationListComponent,
    MainLayoutComponent,
    ImmigrationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
