import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getRoles, getStatus } from '../../redux/login/login.selectors';
import { LoginState } from '../../redux/login/login.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  roles$: Observable<String[]>;
  userStatus$: Observable<boolean>;
  
  constructor(private store: Store<LoginState>,
    private router: Router) {
    this.roles$ = this.store.select(getRoles);
    this.userStatus$ = this.store.select(getStatus);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLogin(route);
  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return true;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  async checkUserLogin(route: ActivatedRouteSnapshot): Promise<boolean> {
    if (this.userStatus$.subscribe(val => val)) {
      let userRole: String[]; 
      await this.roles$.subscribe(roles => {userRole = roles});
      if (route.data.role && userRole.includes(route.data.role)) {
        this.router.navigate(['/authentication/signin']);
        return false;
      }
      return true;
    }

    this.router.navigate(['/authentication/signin']);
    return false;
  }
}
