import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewCardComponent } from './crew-card.component';
import { UiModule } from '@spacex/ui';



@NgModule({
  declarations: [
    CrewCardComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    CrewCardComponent
  ]
})
export class CrewCardModule { }
