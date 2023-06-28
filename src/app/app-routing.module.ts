import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'news-single',
    loadChildren: () => import('./news-single/news-single.module').then( m => m.NewsSinglePageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'entertainment',
    loadChildren: () => import('./entertainment/entertainment.module').then( m => m.EntertainmentPageModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./technology/technology.module').then( m => m.TechnologyPageModule)
  },
  {
    path: 'science',
    loadChildren: () => import('./science/science.module').then( m => m.SciencePageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./sports/sports.module').then( m => m.SportsPageModule)
  },
  {
    path: 'business-single',
    loadChildren: () => import('./business-single/business-single.module').then( m => m.BusinessSinglePageModule)
  },
  {
    path: 'entertainment-single',
    loadChildren: () => import('./entertainment-single/entertainment-single.module').then( m => m.EntertainmentSinglePageModule)
  },
  {
    path: 'science-single',
    loadChildren: () => import('./science-single/science-single.module').then( m => m.ScienceSinglePageModule)
  },
  {
    path: 'sports-single',
    loadChildren: () => import('./sports-single/sports-single.module').then( m => m.SportsSinglePageModule)
  },
  {
    path: 'technology-single',
    loadChildren: () => import('./technology-single/technology-single.module').then( m => m.TechnologySinglePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
