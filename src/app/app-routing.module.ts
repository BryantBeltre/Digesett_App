import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './guard/authguard.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),

  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'tarifario',
    loadChildren: () => import('./tarifario/tarifario.module').then( m => m.TarifarioPageModule)
  },
  {
    path: 'consutarvehiculo',
    loadChildren: () => import('./consutarvehiculo/consutarvehiculo.module').then( m => m.ConsutarvehiculoPageModule)
  },
  {
    path: 'consultarconductor',
    loadChildren: () => import('./consultarconductor/consultarconductor.module').then( m => m.ConsultarconductorPageModule)
  },
  {
    path: 'aplicarruta',
    loadChildren: () => import('./aplicarruta/aplicarruta.module').then( m => m.AplicarrutaPageModule)
  },
  {
    path: 'consultarmulta',
    loadChildren: () => import('./consultarmulta/consultarmulta.module').then( m => m.ConsultarmultaPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  }










];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
