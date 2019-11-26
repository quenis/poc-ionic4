import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'modulos/home',
    pathMatch: 'full'
  },
  {
    path: 'modulos/home',
    loadChildren: () => import('./modulos/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'modulos/list',
    loadChildren: () => import('./modulos/list/list.module').then(m => m.ListPageModule)
  },
  { path: 'modulos/pagina1', loadChildren: './modulos/pagina1/pagina1.module#Pagina1PageModule' },
  { path: 'modulos/pagina2', loadChildren: './modulos/pagina2/pagina2.module#Pagina2PageModule' },
  { path: 'modulos/pagina3', loadChildren: './modulos/pagina3/pagina3.module#Pagina3PageModule' },
  { path: 'modulos/pagina4', loadChildren: './modulos/pagina4/pagina4.module#Pagina4PageModule' },
  { path: 'modulos/pagina5', loadChildren: './modulos/pagina5/pagina5.module#Pagina5PageModule' },
  { path: 'modulos/pagina6', loadChildren: './modulos/pagina6/pagina6.module#Pagina6PageModule' },  { path: 'mapbox', loadChildren: './modulos/mapbox/mapbox.module#MapboxPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
