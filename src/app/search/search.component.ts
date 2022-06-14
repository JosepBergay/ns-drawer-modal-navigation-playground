import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { ModalDialogService, RouterExtensions } from '@nativescript/angular'
import { ActivatedRoute } from '@angular/router'
import { ModalRootComponent } from '~/app/modal/modal-root.component'
@Component({
  selector: 'Search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(
    private routerExtensions: RouterExtensions,
    private ar: ActivatedRoute,
    private modalService: ModalDialogService,
    private vcRef: ViewContainerRef
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    console.log('INIT SearchComponent')
  }

  ngOnDestroy(): void {
    console.log('DESTROYING SearchComponent')
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  navToDetails() {
    console.log('gfather', this.ar.parent)
    this.routerExtensions.navigateByUrl('/home/search/123', {
      // this.routerExtensions.navigate([{ outlets: { primary: ['search', '123'] } }], {
      //   relativeTo: this.ar.parent,
      transition: { name: 'slide' }
    })
  }

  onOpenModal() {
    this.modalService
      .showModal(ModalRootComponent, {
        fullscreen: true,
        viewContainerRef: this.vcRef,
        animated: true,
        context: {
          boom: 'boom'
        }
      })
      .then(_ => console.log('--------- BACK FROM MODAL', _))
  }
}
