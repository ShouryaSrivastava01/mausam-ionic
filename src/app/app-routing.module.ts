import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./weather-detail/weather-detail.module').then( m => m.WeatherDetailPageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  // {
  //   path: 'weather-detail',
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
