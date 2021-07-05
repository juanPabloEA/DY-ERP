import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserPayload } from '../../redux/login/UserPayload';
import { LOGIN } from '../../redux/login/login.constants';
import * as LoginActions from '../../redux/login/login-page.actions';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {
  
  status$: Observable<boolean>;
  userPayload = new FormGroup({
    username:  new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  constructor(private login: Store<{login: boolean}> ) { 
    this.status$ = login.select(LOGIN);
   }

  ngOnInit(): void {
  }

  loginSubmit() {
    let user = {
      username: this.username.value,
      password: this.password.value
    } as UserPayload;

    this.login.dispatch(new LoginActions.GetLogin(user));
  }

  get username() {
    return this.userPayload.get('username');
  }

  get password() {
    return this.userPayload.get('password');
  }

}
