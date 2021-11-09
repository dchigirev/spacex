import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchCardDetailedComponent } from './launch-card-detailed.component';
import { LaunchCardModule } from '../launch-card/launch-card.module';
import { RocketCardModule } from '../rocket-card/rocket-card.module';
import { CrewCardModule } from '../crew-card/crew-card.module';



@NgModule({
  declarations: [
    LaunchCardDetailedComponent
  ],
  imports: [
    CommonModule,
    LaunchCardModule,
    RocketCardModule,
    CrewCardModule
  ],
  exports: [
    LaunchCardDetailedComponent
  ]
})
export class LaunchCardDetailedModule { }
