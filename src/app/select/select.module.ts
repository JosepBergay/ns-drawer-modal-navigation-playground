import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { SelectComponent } from './select.component'

const routes: Routes = [
  {
    path: '',
    component: SelectComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  declarations: [SelectComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SelectModule {}
