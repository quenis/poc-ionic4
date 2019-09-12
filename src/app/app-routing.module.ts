import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'pagina1', loadChildren: './pagina1/pagina1.module#Pagina1PageModule' },
  { path: 'pagina2', loadChildren: './pagina2/pagina2.module#Pagina2PageModule' },
  { path: 'pagina3', loadChildren: './pagina3/pagina3.module#Pagina3PageModule' },
  { path: 'pagina4', loadChildren: './pagina4/pagina4.module#Pagina4PageModule' },
  { path: 'pagina5', loadChildren: './pagina5/pagina5.module#Pagina5PageModule' },
  { path: 'pagina6', loadChildren: './pagina6/pagina6.module#Pagina6PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
