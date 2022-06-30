import {getItem, setItem} from '@/api/localStorage.js';

const STORAGE_NAME = 'auth';

export let auth = {
    login: false,
    name: "",
    token: "",
}

export const initAuth = () => {
    const data = getItem(STORAGE_NAME);
    auth = Object.assign(auth, data);
}

export const setAuth = (authObj) => {
    setItem(STORAGE_NAME, authObj);
    initAuth();
}