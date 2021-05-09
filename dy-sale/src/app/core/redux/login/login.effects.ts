import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from '../../service/login/login.service';
import { LoginActionTypes } from './login-page.actions';
import * as StoreStateAction from './login-page.actions'
 
@Injectable()
export class LoginEffects {
 
  loadLogin$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActionTypes.GetLogin),
    mergeMap(() => this.loginService.getAll()
      .pipe(
        map(login => (new StoreStateAction.SetLogin(login))),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}
}