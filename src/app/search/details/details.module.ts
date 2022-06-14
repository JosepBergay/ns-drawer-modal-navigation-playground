import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular'

import { DetailsComponent } from './details.component'

const routes: Routes = [{ path: '', outlet: 'primary', component: DetailsComponent }]

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild(routes)],
  exports: [DetailsComponent],
  declarations: [DetailsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DetailsModule {}
