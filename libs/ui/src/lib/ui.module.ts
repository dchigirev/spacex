import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from './image/image.module';
import { CardModule } from './card/card.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    ImageModule,
    CardModule
  ]
})
export class UiModule {}
