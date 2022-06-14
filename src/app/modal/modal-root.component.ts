import { Component, OnDestroy, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ModalDialogParams, PageRouterOutlet, RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'modal-root',
  template: `<page-router-outlet name="modal" actionBarVisibility="always"></page-router-outlet>`
})
export class ModalRootComponent implements OnDestroy {
  @ViewChild(PageRouterOutlet) outlet: PageRouterOutlet

  constructor(
    private router: RouterExtensions,
    private ar: ActivatedRoute,
    private params: ModalDialogParams
  ) {
    console.log('ModalRootComponent', this.outlet)
    this.router
      .navigate([{ outlets: { modal: 'select' } }], {
        relativeTo: this.ar.parent,
        queryParams: { case: this.params.context.boom },
        clearHistory: true
      })
      .then(_ => console.log('nav success?', _))
      // Error 2nd time ModalRoot is opened: Cannot activate an already activated outlet.
      .catch(e => console.log('error nav', e))

    // this.router.router.events
    //   .pipe(first(e => e instanceof NavigationStart))
    //   .subscribe(_ => console.log('------- NAV EVENT', this.outlet, _))
  }

  ngOnDestroy() {
    console.log('-------------- MODAL ROOT DESTROYED')
    this.outlet.deactivate()
  }
}
