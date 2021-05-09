import { User } from "./User";

export interface LoginState {
    user: User;
    state: boolean;
    apiKey: String;
}

export const initialState: LoginState = {   
    user: {
        name: '',
        rols: []
    },
    state: false,
    apiKey: ''
};