import { User } from "./User";

export interface LoginState {
    user: User;
    state: boolean;
    apiKey: String;
}

export const initialState: LoginState = {   
    user: {
        name: '',
        roles: [],
        proyects: []
    },
    state: false,
    apiKey: ''
};