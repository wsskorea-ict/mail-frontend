import {getItem, setItem} from "@/api/localStorage";

const AUTH_STORAGE_NAME = 'auth';

export const setAuthStorage = (state, auth) => {
    setItem(AUTH_STORAGE_NAME, auth);
}

export const getAuthStorage = () => {
    return getItem(AUTH_STORAGE_NAME);
}

export const initAuth = ({state}) => {
    const auth = getAuthStorage();
    if(auth) state.auth = auth;
}