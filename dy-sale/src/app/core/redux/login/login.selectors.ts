import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LOGIN } from './login.constants';
import { LoginState } from "./login.state";

const getLoginFeatureState = createFeatureSelector<LoginState>(LOGIN);

export const getProyects = createSelector(
    getLoginFeatureState,
    state => state.user.proyects
);

export const getRoles = createSelector(
    getLoginFeatureState,
    state => state.user.roles
);

export const getStatus = createSelector(
    getLoginFeatureState,
    state => state.state
);
