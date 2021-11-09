import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';

import { LaunchCardModule } from './launch-card/launch-card.module';
import { LaunchCardDetailedModule } from './launch-card-detailed/launch-card-detailed.module';
import { UiModule } from '@spacex/ui';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule, 
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        UiModule,
        LaunchCardModule,
        LaunchCardDetailedModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
