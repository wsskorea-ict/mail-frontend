const LOCALSTORAGE_PREFIX = 'WSS_Email_';

const localStorageName = storageName => LOCALSTORAGE_PREFIX + storageName;

export const getItem = (storageName) => {
    return JSON.parse(localStorage.getItem(localStorageName(storageName)));
}

export const setItem = (storageName, data) => {
    return localStorage.setItem(localStorageName(storageName), JSON.stringify(data));
}