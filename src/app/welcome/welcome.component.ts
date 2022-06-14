import { Component, OnInit } from '@angular/core'
import { NavigationEnd } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import { catchError, first, map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'welcome',
  template: `<StackLayout class="m-y-auto">
    <ActivityIndicator
      width="100"
      height="100"
      [busy]="true"
      class="activity-indicator"></ActivityIndicator>
  </StackLayout>`
})
export class WelcomeComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.routerExtensions.router.events
      .pipe(
        first(e => e instanceof NavigationEnd),
        switchMap(_ => this.navigate('home')),
        catchError(e => this.navigate('auth'))
      )
      .subscribe()
  }

  navigate(route: string /*"auth" | "main"*/) {
    return this.routerExtensions.navigate([route], { clearHistory: true })
  }
}
