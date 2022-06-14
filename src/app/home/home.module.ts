import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { ModalRootComponent } from '../modal/modal-root.component'

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule, NativeScriptUISideDrawerModule],
  declarations: [HomeComponent, ModalRootComponent],
  entryComponents: [ModalRootComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
