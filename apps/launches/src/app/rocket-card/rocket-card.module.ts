import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketCardComponent } from './rocket-card.component';
import { UiModule } from '@spacex/ui';



@NgModule({
  declarations: [
    RocketCardComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    RocketCardComponent
  ]
})
export class RocketCardModule { }
