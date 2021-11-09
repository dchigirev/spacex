import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@spacex/ui';

import { LaunchComponent } from './launch.component';



@NgModule({
  declarations: [
    LaunchComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    LaunchComponent
  ]
})
export class LaunchModule { }
