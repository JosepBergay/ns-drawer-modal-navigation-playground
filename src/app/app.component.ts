import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import { filter, map } from 'rxjs'

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  actionBarVisibility$ = this.routerExtensions.router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    map((e: NavigationEnd) => (!e.urlAfterRedirects.includes('home') ? 'never' : 'always'))
  )

  constructor(private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject services.
  }

  ngOnInit(): void {}
}
