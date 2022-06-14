import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { WelcomeComponent } from './welcome/welcome.component'
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  {
    path: 'auth',
    loadChildren: () => import('~/app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
