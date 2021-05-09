import { createAction, props, Action } from '@ngrx/store';
import * as constant from './login.constants'
import { LoginState } from './login.state';
import { User } from './User';
import { UserPayload } from './UserPayload';

export enum LoginActionTypes {
  GetLogin = '[Login Page] Login',
  SetILogin = '[Login API] Login Loaded Success'
}

export class GetLogin implements Action {
  readonly type = LoginActionTypes.GetLogin;
  constructor(public user: UserPayload) {}
}

export class SetLogin implements Action {
  readonly type = LoginActionTypes.SetILogin;
  constructor(public payload: LoginState) {}
}

export type LoginActions  = GetLogin | SetLogin;