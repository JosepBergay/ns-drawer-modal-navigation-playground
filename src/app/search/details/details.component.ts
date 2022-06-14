import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import { map } from 'rxjs'

@Component({
  selector: 'search-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  id$ = this.ar.params.pipe(map(p => p['id']))

  constructor(private ar: ActivatedRoute, private routerExt: RouterExtensions) {}

  ngOnInit() {}

  goBack() {
    this.routerExt.backToPreviousPage()
  }
}
