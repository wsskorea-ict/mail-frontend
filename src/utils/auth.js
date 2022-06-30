import {getItem, setItem} from '@/api/localStorage.js';

const STORAGE_NAME = 'auth';

export const getAuth = () => {
    return getItem(STORAGE_NAME);
}

export const setAuth = (authObj) => {
    return setItem(STORAGE_NAME, authObj);
}