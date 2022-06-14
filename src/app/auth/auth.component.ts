import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { first, map, switchMap } from 'rxjs/operators'
import { AuthService } from './auth.service'

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isBtnEnabled$ = this.authService.isLogging$.pipe(map(isLogging => !isLogging))

  constructor(private routerExtensions: RouterExtensions, private authService: AuthService) {}

  onLoginTap(): void {
    this.authService
      .login()
      .pipe(
        first(),
        switchMap(_ => this.routerExtensions.navigate(['home'], { clearHistory: true }))
      )
      .subscribe()
  }
}
