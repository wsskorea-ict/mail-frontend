import axios from "axios";
import {mail} from "@/api";

const API_HOST = '';

export default {
    /** mail **/
    FETCH_MAIL_LIST({commit}) {
        mail.list().then(({data}) => commit('SET_MAIL_LIST', data));
    },
    /** user **/
    LOGIN({commit}) {
        return commit("LOGIN", {token: 'test user token', name: 'test user name'});
    },
    _LOGIN({commit}, {id, pw}) {
        return axios.post(`${API_HOST}/login`, {id, pw})
            .then(({data}) => {
                commit('LOGIN', data)
            })
    },
    LOGOUT({commit}) {
        commit('LOGOUT')
    },
}