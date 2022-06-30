import {setAuthStorage} from "@/api/auth"
import axios from "axios"

export default {
    /** mail **/
    SET_MAIL_LIST(state, data) {
        state.mailList = data;
        this.commit("SET_CHECKED_MAIL_LIST", false);
    },
    SET_CHECKED_MAIL(state, {idx, bool}) {
        state.checkedMailIds[idx] = bool;
        state.checkedMailAll = this.getters.checkedMailNumber === state.mailList.length;
    },
    SET_CHECKED_MAIL_LIST(state, bool) {
        state.checkedMailIds = new Array(state.mailList.length).fill(bool);
        state.checkedMailAll = bool;
    },
    /** user **/
    LOGIN(state, {token, name}) {
        const auth = {
            token,
            name,
        }
        state.auth = auth;
        setAuthStorage(auth);
        axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
    },
    LOGOUT(state) {
        const auth = {
            token: null,
            name: null,
        }
        state.auth = auth;
        setAuthStorage(auth);
        axios.defaults.headers.common['Authorization'] = undefined;
    }
}