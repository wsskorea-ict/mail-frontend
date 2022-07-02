import axios from "axios";
import {mail} from "@/api";

const API_HOST = '';

export default {
    /** mail **/
    FETCH_MAIL_STAR(context, {id, bool}) {
        mail.starred(id, bool).then(({data}) => {
            console.log(data.message);
            this.dispatch("FETCH_MAIL_LIST");
        })
    },
    FETCH_MAIL_DETAIL({commit}, id) {
        mail.get(id).then(({data}) => {
            commit('SET_MAIL_SHOW', data);
        });
    },
    FETCH_MAIL_LIST({commit, state}) {
        mail.list(state.currentPage).then(({data}) => {
            commit('SET_MAIL_LIST', data)
        });
    },
    DESTROY_MAIL_LIST(context, ids) {
        mail.destroy(ids).then(({data}) => {
            window.alert(data.message)
            this.dispatch("FETCH_MAIL_LIST");
        });
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