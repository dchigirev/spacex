import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@spacex/ui';

import { CrewModule } from './crew/crew.module';
import { LaunchModule } from './launch/launch.module';
import { RocketModule } from './rocket/rocket.module';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    CrewModule,
    LaunchModule,
    RocketModule
  ]
})
export class EntitiesModule {}
