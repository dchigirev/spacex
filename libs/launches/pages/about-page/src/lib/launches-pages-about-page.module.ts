import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AboutPageComponent }
    ]),
  ],
  declarations: [
    AboutPageComponent
  ],
  exports: [
    AboutPageComponent
  ]
})
export class LaunchesPagesAboutPageModule {}
