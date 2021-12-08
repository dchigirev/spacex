import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LaunchesPageComponent } from './launches-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LaunchesPageComponent }
    ]),
  ],
  declarations: [
    LaunchesPageComponent
  ],
  exports: [
    LaunchesPageComponent
  ]
})
export class LaunchesPagesLaunchesPageModule { }
