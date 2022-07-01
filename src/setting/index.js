import {getItem, setItem} from "@/api/localStorage";

const SIDEBAR_STORAGE_NAME = 'smallSidebar';
const THEME_STORAGE_NAME = 'smallSidebar';

const initSetting = store => {
    const theme = getItem(THEME_STORAGE_NAME);
    const sidebar = getItem(SIDEBAR_STORAGE_NAME);

    if (theme) store.commit("SET_THEME", theme);
    if (sidebar) store.commit("SET_SIDEBAR", sidebar);
}

const setTheme = theme => {
    setItem(THEME_STORAGE_NAME, theme);
}

const setSidebar = bool => {
    setItem(SIDEBAR_STORAGE_NAME, bool);
}

export {
    initSetting,
    setTheme,
    setSidebar,
}