import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';

import { LaunchCardModule } from './launch-card/launch-card.module';
import { LaunchCardDetailedModule } from './launch-card-detailed/launch-card-detailed.module';
import { UiModule } from '@spacex/ui';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    UiModule,
    LaunchCardModule,
    LaunchCardDetailedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
