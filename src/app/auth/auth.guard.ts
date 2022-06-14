import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import { AuthService } from './auth.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private routerExtensions: RouterExtensions, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.getIsAuthenticated() || this.routerExtensions.router.parseUrl('auth')
  }
}
