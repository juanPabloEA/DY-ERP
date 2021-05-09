import { LoginActions, LoginActionTypes } from './login-page.actions';
import { initialState, LoginState } from './login.state';

export function reducer(state = initialState, action: LoginActions): LoginState {
  switch (action.type) {
      case LoginActionTypes.SetILogin:
          {
              return action.payload;
          }
      default:
          return state;
  }
}