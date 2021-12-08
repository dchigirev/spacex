import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'launches',
        loadChildren: () => import('@spacex/launches/pages/launches-page').then(m => m.LaunchesPagesLaunchesPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('@spacex/launches/pages/about-page').then(m => m.LaunchesPagesAboutPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
