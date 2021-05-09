import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../redux/login/User';
import {login} from '../../redux/login/login-page.actions';
import { LOGIN } from '../../redux/login/login.constants';

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
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private login: Store<{login: boolean}> ) { 
    this.status$ = login.select(LOGIN);
   }

  ngOnInit(): void {
  }

  loginSubmit() {
    let user = {
      username: this.emailFormControl.value,
      password: this.passwordFormControl.value
    } as User;

    this.login.dispatch(login(user));
  }

}
