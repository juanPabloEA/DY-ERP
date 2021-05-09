import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as constant from './login.constants';
import { LoginEffects } from './login.effects';
import { reducer } from './login.reducers';



@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forFeature([LoginEffects]),
    StoreModule.forFeature(constant.LOGIN, reducer)
  ],
  providers: [
    LoginEffects
  ]
})
export class LoginModule { }
