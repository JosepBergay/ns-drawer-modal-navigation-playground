import { Injectable } from '@angular/core'
import { BehaviorSubject, delay, of, tap } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = Math.random() >= 0.5
  private isLogging = new BehaviorSubject(false)
  isLogging$ = this.isLogging.asObservable()

  login() {
    this.isLogging.next(true)
    return of(true).pipe(
      delay(2_000),
      tap(_ => {
        this.isAuthenticated = true
        this.isLogging.next(false)
        console.log('logggin end')
      })
    )
  }

  getIsAuthenticated() {
    return this.isAuthenticated
  }
}
