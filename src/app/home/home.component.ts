import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular'
import { filter, map, shareReplay } from 'rxjs/operators'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent, { static: true })
  drawerCmp: RadSideDrawerComponent

  currentUrl = this.router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    map((e: NavigationEnd) => e.urlAfterRedirects),
    // tap((_) => console.log("nav event", _, _.split("/").length)),
    shareReplay({ bufferSize: 1, refCount: true })
  )

  searchSelected$ = this.currentUrl.pipe(map(curr => curr === '/home/search'))

  featuredSelected$ = this.currentUrl.pipe(map(curr => curr === '/home/featured'))

  settingsSelected$ = this.currentUrl.pipe(map(curr => curr === '/home/settings'))

  constructor(
    private router: Router,
    private routerExtensions: RouterExtensions,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routerExtensions.navigate([{ outlets: { main: 'search' } }], {
      relativeTo: this.ar,
      clearHistory: true
    })
  }

  ngOnDestroy(): void {
    console.log('DESTROYING HomeComponent')
  }

  onDrawerButtonTap(): void {
    console.log('onDrawerButtonTap')
    this.drawerCmp.sideDrawer.toggleDrawerState()
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([{ outlets: { main: navItemRoute.replace('/', '') } }], {
      relativeTo: this.ar.parent,
      clearHistory: true
    })

    this.drawerCmp.sideDrawer.closeDrawer()
  }
}
