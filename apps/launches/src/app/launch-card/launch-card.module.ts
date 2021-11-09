import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@spacex/ui';

import { LaunchCardComponent } from './launch-card.component';
import { CountdownPipe } from './_pipes';
import { CountdownComponent } from './countdown/countdown.component';



@NgModule({
  declarations: [
    LaunchCardComponent,
    CountdownPipe,
    CountdownComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    LaunchCardComponent
  ]
})
export class LaunchCardModule { }
