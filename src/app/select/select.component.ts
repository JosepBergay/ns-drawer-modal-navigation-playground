import { Component } from '@angular/core'
import { ModalDialogParams, RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'search-select',
  template: `<ActionBar class="action-bar">
      <NavigationButton visibility="hidden"></NavigationButton>
      <GridLayout columns="50, *">
        <Label class="action-bar-title" text="Modal View" colSpan="2"></Label>
      </GridLayout>
    </ActionBar>

    <StackLayout class="m-y-auto m-x-auto">
      <Label [text]="param" textWrap="true"></Label>
      <Button text="Go back" (tap)="goBack()"></Button>
    </StackLayout> `
})
export class SelectComponent {
  param = 'none'
  constructor(private params: ModalDialogParams, private routerExtensions: RouterExtensions) {
    this.param = this.params.context.boom
  }

  goBack() {
    // this.routerExtensions.back()
    // this.routerExtensions.backToPreviousPage()
    // this.routerExtensions.back({ outlets: ['primary'] })
    this.params.closeCallback('done')
  }
}
