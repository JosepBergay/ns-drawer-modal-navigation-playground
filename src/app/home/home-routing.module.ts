import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

import { HomeComponent } from './home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'search',
        outlet: 'main',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'featured',
        outlet: 'main',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/featured/featured.module').then(m => m.FeaturedModule)
      },
      {
        path: 'settings',
        outlet: 'main',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  },
  {
    path: 'search/:id',
    loadChildren: () => import('~/app/search/details/details.module').then(m => m.DetailsModule)
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {}
