import { Component, ViewContainerRef } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { ModalDialogService } from '@nativescript/angular'
import { ModalRootComponent } from '../modal/modal-root.component'

@Component({
  selector: 'Featured',
  templateUrl: './featured.component.html'
})
export class FeaturedComponent {
  constructor(private modalService: ModalDialogService, private vcRef: ViewContainerRef) {}

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onOpenModal() {
    this.modalService
      .showModal(ModalRootComponent, {
        context: { boom: 'owned' },
        viewContainerRef: this.vcRef,
        animated: true
      })
      .then(_ => console.log('--------- BACK FROM MODAL', _))
  }
}
