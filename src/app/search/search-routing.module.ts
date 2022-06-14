import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { SearchComponent } from './search.component'

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      {
        path: 'select',
        outlet: 'modal',
        loadChildren: () => import('../select/select.module').then(m => m.SelectModule)
      }
    ]
  }
  // {
  //   path: ":id",
  //   loadChildren: () =>
  //     import("./details/details.module").then((m) => m.DetailsModule),
  // },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SearchRoutingModule {}
